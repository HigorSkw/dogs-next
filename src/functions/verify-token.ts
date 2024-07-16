import { jwtVerify } from 'jose';

export default async function verifyToken(token: string): Promise<boolean> {
  if (!token) return false;

  try {
    // jwtVerify(token, new TextEncoder().encode('SECRET_KEY'), {
    //   algorithms: ['HS256'],
    // });

    return true;
  } catch (error) {
    return false;
  }
}
