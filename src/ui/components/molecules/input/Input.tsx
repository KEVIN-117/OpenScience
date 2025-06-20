import {
  StyledDivider,
  StyledInputGroup,
  StyledProtocol,
} from 'ui/components/atoms/base-input/BaseInput.styles';
import { ActionButton } from 'ui/components/atoms/action-button/ActionButton';
import { StyledIcon } from '../../atoms/label/Label.styles';
import { StyledInputContainer, StyledInputWrapper } from './Input.styles';
import { Input as BaseInput } from '../../atoms/base-input/BaseInput';
import type { UrlInputProps } from './types/IProps';

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

        <ActionButton iconName="fi-rr-copy" onClick={onCopy} variant={variant} radius={radius}>
          Copy
        </ActionButton>
      </StyledInputWrapper>
    </StyledInputContainer>
  );
}
