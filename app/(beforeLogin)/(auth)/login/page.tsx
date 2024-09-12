'use client';

import Button from '@/components/buttons/button';
import { inputStyle } from '@/components/inputs/input-styles';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import EmailInput from '@/components/inputs/email-input';
import PasswordInput from '@/components/inputs/password-input';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const response = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (response?.error) {
      // memo: 로그인 메세지 나중에 확인해서 수정
      setError('로그인 실패');
    } else {
      router.push('/epidays');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} className="mb-4" />
      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-6"
      />
      <Button type="submit" design="wide">
        로그인
      </Button>
      {error && <p className="text-var-error">{error}</p>}
    </form>
  );
}
