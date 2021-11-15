import {UserInfo, Rank, CloudLog} from '../@types/cloud';
import {DBLog} from '../@types/log';
import {LogCampus, LogType} from '../@types/log';

export default class API {
  private api = 'https://api.tdu.app';

  private userApi = `${this.api}/user`;
  private logApi = `${this.api}/log`;

  public async createAccount(userName: string): Promise<string> {
    const option = this.fetchOption('POST');
    option['body'] = `user_name=${userName}`;

    const res = await fetch(this.userApi, option);
    await this.checkStatus(res);

    return (await res.json())['id'];
  }

  public async getUserInfo(id: string): Promise<UserInfo> {
    const option: RequestInit = {
      method: 'GET',
    };

    const res = await fetch(`${this.userApi}?id=${id}`, option);
    await this.checkStatus(res);

    const resJson = await res.json();
    const userInfo: UserInfo = {
      id: resJson['id'],
      name: resJson['name'],
      numberOfLogs: resJson['number_of_logs'],
      createDate: resJson['create_date'],
      updateDate: new Date(),
    };

    return userInfo;
  }

  public async changeName(id: string, userName: string) {
    const option = this.fetchOption('POST');
    option['body'] = `id=${id}&user_name=${userName}`;

    const res = await fetch(this.userApi, option);

    await this.checkStatus(res);
  }

  public async deleteUser(id: string) {
    const option = this.fetchOption('DELETE');

    const res = await fetch(`${this.userApi}?id=${id}`, option);

    await this.checkStatus(res);
  }

  public async rank(): Promise<Rank[]> {
    const option = this.fetchOption('GET');

    const res = await fetch(`${this.api}/rank`, option);
    await this.checkStatus(res);

    return (await res.json()) as Rank[];
  }

  public async addLog(id: string, log: DBLog) {
    const option = this.fetchOption('POST');
    option['body'] = `id=${id}&date=${log.date.toISOString()}&campus=${
      log.campus
    }&log_type=${log.type}&code=${log.code}`;

    const res = await fetch(this.logApi, option);
    await this.checkStatus(res);
  }

  public async getLogs(id: string): Promise<DBLog[]> {
    const option = this.fetchOption('GET');
    const res = await fetch(`${this.logApi}?id=${id}`, option);
    await this.checkStatus(res);

    const contents = (await res.json()) as CloudLog[];
    const logs: DBLog[] = [];

    for (const element of contents) {
      logs.push({
        campus: this.selectCampus(element.campus),
        code: element.code,
        type: LogType[element.log_type],
        label: element.label,
        date: new Date(element.date),
      });
    }

    return logs;
  }

  private async checkStatus(res: Response) {
    if (!res.ok) {
      throw new Error(`${res.status}: ${(await res.text()) || 'No Text'}`);
    }
  }

  private selectCampus(campus: string) {
    switch (campus) {
      case '千住':
        return LogCampus.senju;
      case '鳩山':
        return LogCampus.hatoyama;
    }
  }

  private fetchOption(method: string): RequestInit {
    const base: RequestInit = {
      credentials: 'include',
      mode: 'cors',
    };

    if (method === 'POST') {
      return {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        ...base,
      };
    }
    return {
      method: method,
      ...base,
    };
  }
}
