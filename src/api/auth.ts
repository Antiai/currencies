import {ILoginInput} from '../modules/auth/types';
import {api} from '../utils';

const signIn = async (credentials: ILoginInput): Promise<{
  result: 'ok' | 'error',
  error: string,
}> =>
  api.performRequest<ILoginInput>(credentials, 'login');

const authApi = {
  signIn,
};

export default authApi;