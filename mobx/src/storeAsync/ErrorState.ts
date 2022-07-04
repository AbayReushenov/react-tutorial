export interface IMsg {
  msg: string | any;
}

export interface ErrorState {
  msg: IMsg;
  status: string | null;
  id: string | null;
}

export const Error: Record<string, ErrorState> = {
  initialState: {
    msg: { msg: null },
    status: null,
    id: null,
  },

  pending: {
    msg: {
      msg: 'Loading ...',
    },
    status: 'pending',
    id: null,
  },
  done: {
    msg: {
      msg: 'Operation fetch number, total success.',
    },
    status: 'done',
    id: null,
  },
  error: {
    msg: {
      msg: 'Operation fetch number, failed.',
    },
    status: 'error',
    id: null,
  },
};
