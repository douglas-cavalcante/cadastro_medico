import produce from 'immer';

const INITIAL_STATE = {
  uid: null,
  signed: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/AlterarUid': {
        draft.uid = action.payload.uid;
        draft.signed = true;
        break;
      }
      default:
    }
  });
}
