import {UserInfo} from '../@types/cloud';

export default class API {
  private api = 'https://api.tdu.app';

  private userApi = `${this.api}/user`;
  private logApi = `${this.api}/user`;

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

  public async rank(): Promise<string[]> {
    const option = this.fetchOption('GET');

    const res = await fetch(`${this.api}/rank`, option);
    await this.checkStatus(res);

    return (await res.json()) as string[];
  }

  private async checkStatus(res: Response) {
    if (!res.ok) {
      throw new Error(`${res.status}: ${(await res.text()) || 'No Text'}`);
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
