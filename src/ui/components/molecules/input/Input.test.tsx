/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Input } from './Input';
import type { UrlInputProps } from './types/IProps';

vi.mock('ui/components/atoms/action-button/ActionButton', () => ({
  ActionButton: ({ onClick, variant }: { onClick: () => void; variant: string }) => (
    <button data-testid="copy-button" onClick={onClick} data-variant={variant}>
      Copy
    </button>
  ),
}));

vi.mock('../../atoms/base-input/BaseInput', () => ({
  BaseInput: ({ value, placeholder, ref }: UrlInputProps) => (
    <input data-testid="base-input" ref={ref} value={value} placeholder={placeholder} />
  ),
}));

vi.mock('../../atoms/label/Label.styles', () => ({
  StyledIcon: ({ iconName }: { iconName: string }) => <div data-testid="icon">{iconName}</div>,
}));

describe('URL Input Component', () => {
  const defaultProps = {
    value: 'example.com',
    onChange: vi.fn(),
    placeholder: 'Enter URL...',
    onCopy: vi.fn(),
  };

  it('renders correctly with default props', () => {
    render(<Input {...defaultProps} />);

    expect(screen.getByTestId('base-input')).toBeInTheDocument();
    expect(screen.getByText('https://')).toBeInTheDocument();
    expect(screen.getByText('|')).toBeInTheDocument();
    expect(screen.getByTestId('copy-button')).toBeInTheDocument();

    const icons = screen.getAllByTestId('icon');
    expect(icons).toHaveLength(2);
    expect(icons[0]).toHaveTextContent('fi-sr-globe');
    expect(icons[1]).toHaveTextContent('fi-sr-globe');

    // Verificar valores
    expect(screen.getByTestId('base-input')).toHaveValue('example.com');
    expect(screen.getByTestId('base-input')).toHaveAttribute('placeholder', 'Enter URL...');
  });

  it('applies disabled state correctly', () => {
    render(<Input {...defaultProps} variant="disabled" />);

    const input = screen.getByTestId('base-input');
    const copyButton = screen.getByTestId('copy-button');

    expect(input).toBeDisabled();
    expect(copyButton).toHaveAttribute('data-variant', 'disabled');
  });

  it('applies error variant correctly', () => {
    render(<Input {...defaultProps} variant="error" />);

    const container = screen.getByTestId('base-input').closest('div');
    const copyButton = screen.getByTestId('copy-button');

    expect(container).toHaveAttribute('data-variant', 'error');
    expect(copyButton).toHaveAttribute('data-variant', 'error');
  });

  it('forwards the ref to the input element', () => {
    const ref = { current: null };
    render(<Input {...defaultProps} ref={ref} />);

    const input = screen.getByTestId('base-input');
    expect(ref.current).toBe(input);
  });
});
