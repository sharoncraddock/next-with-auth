import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LinkButton from '../../app/components/link-button';
import Image from 'next/image';
import LoginPage from '../../app/signin/page';
import { act } from 'react-dom/test-utils';


jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockSignIn = jest.fn();
const mockPush = jest.fn();

useRouter.mockReturnValue({
  push: mockPush,
});


describe('LoginPage', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders page with login elements', async () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText('Email');
    expect(emailInput).toBeInTheDocument();
    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument();
    const loginButton = screen.getByText('Login');
    expect(loginButton).toBeInTheDocument();
    const googleLoginButton = screen.getByText('Login with Google');
    expect(googleLoginButton).toBeInTheDocument();
  });

  test('signs user in with email and password', async () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText('Email');

    await userEvent.type(emailInput, 'jsmith@email.com');
    expect(emailInput).toHaveValue('jsmith@email.com')

    const passwordInput = screen.getByLabelText('Password');
    await userEvent.type(passwordInput, 'test12345');
    expect(passwordInput).toHaveValue('test12345')
  
    const loginButton = screen.getByText('Login');

    await act(async () => {
      fireEvent.click(loginButton);
      await Promise.resolve();
    });

    expect(signIn).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith('/me');
    
  });
});
