import {openDB, IDBPDatabase, DBSchema} from 'idb';
import {Log} from '../@types/log';

interface MyDB extends DBSchema {
  log: {
    key: string;
    value: Log;
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

  async add(log: Log) {
    await this.db.add('log', log);
  }

  async addMulti(logs: Log[]) {
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

  async get(date: string): Promise<Log> {
    return await this.db.get('log', date);
  }

  async getAll(): Promise<Log[]> {
    return await this.db.getAll('log');
  }

  async deleteDB() {
    await this.db.clear('log');
  }

  async count(): Promise<number> {
    return await this.db.count('log');
  }
}
