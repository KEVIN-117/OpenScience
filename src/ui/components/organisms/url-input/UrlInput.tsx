import { Label } from 'ui/components/atoms/label/Label';
import { Input } from 'ui/components/molecules/input/Input';
import { StyledIcon } from 'ui/components/atoms/label/Label.styles';
// import { Tooltip } from '@mui/material';
import React from 'react';
import {
  StyledButton,
  StyledFooter,
  StyledHeader,
  StyledHintText,
  ToolTipButton,
  UrlInputStyled,
  type URLInputRadius,
  type URLInputSize,
  type URLInputVariant,
} from './UrlInput.styles';

interface URLInputComponentProps {
  value: string;
  onChange: (value: string) => void;
  variant?: URLInputVariant;
  size?: URLInputSize;
  radius?: URLInputRadius;
  label?: string;
  placeholder?: string;
  hintText?: string;
  showCloseButton?: boolean;
  onClose?: () => void;
  onCopy?: () => void;
}

export function UrlInput({
  value,
  onChange,
  variant = 'default',
  size = 'medium',
  radius = 'small',
  label = 'Website Address',
  placeholder = 'example.com',
  hintText = 'Enter a valid URL',
  showCloseButton = true,
  onClose,
  onCopy,
}: URLInputComponentProps) {
  // const ref = React.useRef<HTMLInputElement>(null);

  const handleOnCopy = () => {
    if (onCopy) {
      onCopy();
    }
    navigator.clipboard
      .writeText(value)
      .then(() => {
        console.log('URL copied to clipboard:', value);
      })
      .catch((error: unknown) => {
        console.error('Failed to copy URL:', error);
      });
  };

  return (
    <UrlInputStyled>
      <StyledHeader>
        <Label iconName="fi-sr-globe">{label}</Label>
        {showCloseButton && (
          <StyledButton onClick={onClose} aria-label="Cerrar" setBorder>
            <StyledIcon iconName="Close-URL" />
          </StyledButton>
        )}
      </StyledHeader>
      <Input
        radius={radius}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        variant={variant}
        onCopy={handleOnCopy}
        size={size}
      />
      <StyledFooter>
        {variant === 'error' && (
          <StyledHintText variant={variant} size={size}>
            <StyledIcon iconName="Info-Tooltip" iconSize="medium" />
            {hintText}
          </StyledHintText>
        )}

        <ToolTipButton title="Copiar URL" aria-label="Copiar URL" placement="bottom" arrow>
          <StyledButton>
            <StyledIcon iconName="Info-Tooltip" iconSize="medium" />
          </StyledButton>
        </ToolTipButton>
      </StyledFooter>
    </UrlInputStyled>
  );
}
