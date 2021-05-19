import {openDB, IDBPDatabase, DBSchema} from 'idb';
import {DBLog} from '../@types/log';

interface MyDB extends DBSchema {
  log: {
    key: Date;
    value: DBLog;
  };
}

export class DB {
  private name: string;
  private version: number;
  private db: IDBPDatabase<MyDB>;
  // TODO: sort

  constructor(name: string, version = 1) {
    this.name = name;
    this.version = version;
  }

  async openDB() {
    this.db = await openDB<MyDB>(this.name, this.version, {
      upgrade(db) {
        db.createObjectStore('log', {keyPath: 'date'});
      },
    });
  }

  async add(log: DBLog) {
    await this.db.add('log', log);
  }

  async addMulti(logs: DBLog[]) {
    const tx = this.db.transaction('log', 'readwrite');

    await Promise.all(
      logs.map(value => {
        tx.store.add(value).catch(e => {
          console.log(e);
        });
      })
    );

    await tx.done;
  }

  async get(date: Date): Promise<DBLog> {
    return await this.db.get('log', date);
  }

  async getAll(): Promise<DBLog[]> {
    return await this.db.getAll('log');
  }

  async getPeriod(days: number) {
    const keys = (await this.db.getAllKeys('log')).reverse();
    const now = new Date();
    const logs: DBLog[] = [];

    for await (const cursor of keys) {
      if (
        days === 15 ||
        days >= Math.abs(now.valueOf() - cursor.valueOf()) / 86400000
      ) {
        logs.push(await this.get(cursor));
      } else {
        // dbは日付でソート済み前提
        break;
      }
    }

    return logs.reverse();
  }

  async getLatest(): Promise<DBLog> {
    return (await this.getPeriod(1)).reverse()[0];
  }

  async deleteDB() {
    await this.db.clear('log');
  }

  async count(): Promise<number> {
    return await this.db.count('log');
  }
}
