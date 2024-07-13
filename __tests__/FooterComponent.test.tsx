import { render, screen } from '@testing-library/react';
import FooterComponent from '@/components/FooterComponent';

describe('FooterComponent', () => {
    it('should display the get in touch link and navigate to the contact page on click', () => {
        render(<FooterComponent />)

        const getInTouch = screen.getAllByText('Get in touch');
        expect(getInTouch).toHaveLength(2);
        
        getInTouch.forEach(link => {
            expect(link.closest('a')).toHaveAttribute('href', '/contact');
        });
    })

    it('should display the for recruiters link and navigate to the recruiter page on click', () => {
        render(<FooterComponent />)

        const getInTouch = screen.getByText(/for recruiters/i);
        expect(getInTouch).toBeInTheDocument();
        
        expect(getInTouch.closest('a')).toHaveAttribute('href', '/recruiter');
    })

    it('should display the for job seekers link and navigate to the seeker page on click', () => {
        render(<FooterComponent />)

        const getInTouch = screen.getByText(/for job seekers/i);
        expect(getInTouch).toBeInTheDocument();
        
        expect(getInTouch.closest('a')).toHaveAttribute('href', '/seeker');
    })
})