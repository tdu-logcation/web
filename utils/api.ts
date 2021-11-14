export interface UserInfo {
  id: string;
  name: string;
  create_date: string;
  number_of_logs: number;
}

export default class API {
  private api = 'https://api.tdu.app';

  private userApi = `${this.api}/user`;
  private logApi = `${this.api}/user`;

  public async createAccount(userName: string): Promise<string> {
    const option: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `user_name=${userName}`,
    };

    const res = await fetch(this.userApi, option);
    this.checkStatus(res.status);

    return (await res.json())['id'];
  }

  public async getUserInfo(id: string): Promise<UserInfo> {
    const option: RequestInit = {
      method: 'GET',
    };

    const res = await fetch(`${this.userApi}?id=${id}`, option);
    this.checkStatus(res.status);

    return (await res.json()) as UserInfo;
  }

  public async changeName(id: string, userName: string) {
    const option: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `id=${id}&user_name=${userName}`,
    };

    const res = await fetch(this.userApi, option);

    this.checkStatus(res.status);
  }

  public async deleteUser(id: string) {
    const option: RequestInit = {
      method: 'DELETE',
    };

    const res = await fetch(`${this.userApi}?id=${id}`, option);

    this.checkStatus(res.status);
  }

  public async rank(): Promise<string[]> {
    const option: RequestInit = {
      method: 'GET',
    };

    const res = await fetch(`${this.api}/rank`, option);
    this.checkStatus(res.status);

    return (await res.json()) as string[];
  }

  private checkStatus(status: number) {
    if (status !== 200) {
      throw new Error(`HTTPステータス: ${status}`);
    }
  }
}
