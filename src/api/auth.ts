import {ResponseBase} from '../common/types/api';
import {ILoginInput} from '../modules/auth/types';
import {api} from '../utils';

const signIn = async (credentials: ILoginInput): Promise<ResponseBase> =>
  api.performRequest<ILoginInput>(credentials, 'login');

const authApi = {
  signIn,
};

export default authApi;