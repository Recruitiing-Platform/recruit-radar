import { fireEvent, render, screen } from '@testing-library/react';
import NavBarComponent from '@/components/NavBarComponent';
import { useRouter } from 'next/navigation';
import HeroSectionComponent from '@/components/HomepageComponents/HeroSectionComponent';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: jest.fn(),
}));

describe('Home', () => {
  it('should display the create account button and route to the signup page on click', () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push,
      prefetch: jest.fn(),
    });

    render(<NavBarComponent />);

    const createAccountButton = screen.getByText('Create Account');
    expect(createAccountButton).toBeInTheDocument();

    fireEvent.click(createAccountButton);
    expect(push).toHaveBeenCalledWith('/signup');
  });

  it('should display the For Recruiters nav item and route to the recruiter page on click', () => {
    render(<NavBarComponent />);

    const recruiterNav = screen.getByText('For Recruiters');
    expect(recruiterNav).toBeInTheDocument();

    const linkElement = recruiterNav.closest('a');
    expect(linkElement).toHaveAttribute('href', '/recruiter');
  });

  it('should display the For Job Seekers nav item and route to the seeker page on click', () => {
    render(<NavBarComponent />);

    const recruiterNav = screen.getByText('For Job Seekers');
    expect(recruiterNav).toBeInTheDocument();

    const linkElement = recruiterNav.closest('a');
    expect(linkElement).toHaveAttribute('href', '/seeker');
  });

  it('should display the Contact nav item and route to the contact page on click', () => {
    render(<NavBarComponent />);

    const recruiterNav = screen.getByText('Contact');
    expect(recruiterNav).toBeInTheDocument();

    const linkElement = recruiterNav.closest('a');
    expect(linkElement).toHaveAttribute('href', '/contact');
  });

  /*================ Hero Section =================== */
  it('should display the find your next hire button and route to the recruiter page', () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push,
      prefetch: jest.fn(),
    });

    render(<HeroSectionComponent />);

    const button = screen.getByText(/find your next hire/i);
    fireEvent.click(button);
    expect(push).toHaveBeenCalledWith('/recruiter');
  });

  it('should display the find your next job button and route to the seeker page', () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push,
      prefetch: jest.fn(),
    });

    render(<HeroSectionComponent />);

    const button = screen.getByText(/find your next job/i);
    fireEvent.click(button);
    expect(push).toHaveBeenCalledWith('/seeker');
  });

  /*================  Section =================== */
});
