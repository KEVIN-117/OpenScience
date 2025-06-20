import type { ActionButtonProps } from './types/IProps';
import { Button } from './ActionButton.styles';
import { Icon } from '../../../utils/vite-svgr/Icon';

export function ActionButton({
  loading,
  iconName = 'fi-rr-copy',
  children,
  radius,
  variant = 'default',
  ...props
}: ActionButtonProps) {
  return (
    <Button
      radius={radius}
      disabled={props.disabled}
      variant={variant}
      sx={{
        ...props.sx,
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      loading={loading}
    >
      <Icon iconName={iconName} />
      <span>{children}</span>
    </Button>
  );
}
