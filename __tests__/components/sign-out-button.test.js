import { render, fireEvent, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import SignOutButton from '../../app/components/sign-out-button'
import { act } from 'react-dom/test-utils';

jest.mock('next-auth/react', () => ({
  signOut: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('next/navigation');

describe('SignOutButton', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('calls signOut and redirects to /signin on click', async () => {
    const mockSignOut = jest.fn();
    const mockPush = jest.fn();

    signOut.mockResolvedValue({});

    useRouter.mockReturnValue({
      push: mockPush,
    });

    render(<SignOutButton />);

    await act(async () => {
      const buttonElement = screen.getByText("Sign Out");
      fireEvent.click(buttonElement);
      await Promise.resolve();
    });

    expect(signOut).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith('/signin');
  });

  test('displays alert if there is an error', async () => {
    window.alert = jest.fn();
    const errorMessage = 'There was an error';

    signOut.mockResolvedValue({ error: errorMessage });

    useRouter.mockReturnValue({});

    render(<SignOutButton />);

    await act(async () => {
      const buttonElement = screen.getByText("Sign Out");
      fireEvent.click(buttonElement);
      await Promise.resolve();
    });

    expect(signOut).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith(errorMessage);
  });
});
