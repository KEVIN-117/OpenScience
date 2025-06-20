import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ActionButton } from './ActionButton';
import type { ActionButtonProps } from './types/IProps';

// Mock del componente Icon ya que es una dependencia externa en este contexto
vi.mock('../../../utils/vite-svgr/Icon', () => ({
  Icon: ({ iconName }: { iconName: string }) => <div data-testid="icon">{iconName}</div>,
}));

describe('ActionButton', () => {
  const defaultProps: ActionButtonProps = {
    children: 'Click me',
    onClick: vi.fn(),
  };

  it('renders correctly with default props', () => {
    render(
      <ActionButton radius="small" loading={false} disabled={false}>
        {defaultProps.children}
      </ActionButton>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
    expect(button).not.toBeDisabled();
  });

  it('renders with custom icon', () => {
    render(
      <ActionButton iconName="fi-rr-copy" radius="small" loading={false} disabled={false}>
        {defaultProps.children}
      </ActionButton>,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveTextContent('fi-rr-copy');
  });

  it('calls onClick when clicked', () => {
    render(
      <ActionButton
        onClick={defaultProps.onClick}
        radius="small"
        loading={false}
        disabled={false}
      />,
    );

    const button = screen.getByRole('button');
    button.click();
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('renders as disabled when disabled prop is true', () => {
    render(
      <ActionButton radius="small" loading={false} disabled>
        {defaultProps.children}
      </ActionButton>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('apply all props correctly', () => {
    render(
      <ActionButton radius="medium" loading disabled={false} variant="error" iconName="fi-rr-copy">
        {defaultProps.children}
      </ActionButton>,
    );

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Click me');
    expect(screen.getByTestId('icon')).toHaveTextContent('fi-rr-copy');
  });
});
