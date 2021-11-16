export interface UserInfo {
  name: string;
  id: string;
  numberOfLogs?: number;
  createDate?: string;
  updateDate?: Date;
}

export interface Rank {
  name: string;
  number_of_logs: number;
}

export interface SendCloudLog {
  date: string;
  campus: string;
  log_type: string;
  label: string;
  code: string;
}

export interface SendData {
  id: string;
  logs: SendCloudLog[];
}

export interface CloudLog extends SendCloudLog {
  id: string;
}
