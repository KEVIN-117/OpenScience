import { StyledIcon } from 'ui/components/atoms/label/Label.styles';
import {
  StyledDivider,
  StyledInputGroup,
  StyledProtocol,
} from 'ui/components/atoms/base-input/BaseInput.styles';
import { ActionButton } from 'ui/components/atoms/action-button/ActionButton';
import React from 'react';
import { StyledInputContainer, StyledInputWrapper, type URLInputRadius } from './Input.styles';
import { Input as BaseInput } from '../../atoms/base-input/BaseInput';

interface UrlInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: 'default' | 'focus' | 'error' | 'disabled';
  onCopy?: () => void;
  size?: 'small' | 'medium' | 'large';
  radius?: URLInputRadius;
  ref?: React.Ref<HTMLInputElement>;
}

export function Input({
  value,
  onChange,
  placeholder,
  variant,
  onCopy,
  size,
  radius,
  ref,
}: UrlInputProps) {
  return (
    <StyledInputContainer radius={radius} variant={variant} size={size}>
      <StyledInputWrapper>
        <StyledIcon iconSize="medium" iconName="fi-sr-globe" />

        <StyledProtocol>https://</StyledProtocol>

        <StyledDivider>|</StyledDivider>

        <StyledInputGroup>
          <StyledIcon iconName="fi-sr-globe" iconSize="medium" />

          <BaseInput
            ref={ref}
            id="url-input"
            type="text"
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            placeholder={placeholder}
            disabled={variant === 'disabled'}
          />
        </StyledInputGroup>

        <ActionButton iconName="fi-rr-copy" onClick={onCopy} variant={variant}>
          Copy
        </ActionButton>
      </StyledInputWrapper>
    </StyledInputContainer>
  );
}
