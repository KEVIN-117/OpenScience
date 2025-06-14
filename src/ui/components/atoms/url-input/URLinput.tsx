import styles from './URLinput.module.scss';
import { Icon } from '../../../utils/vite-svgr/Icon';
import type { IProps } from './types/IProps';

function URLInput(props: IProps) {
  const {
    value,
    onChange,
    placeholder = 'example.com',
    variant = 'default',
    size = 'medium',
    borderRadius = 'small',
    label = 'Website Address',
    showCloseIcon = true,
    onCloseClick,
    onCopyClick,
    showHintText = true,
    hintText = 'Hint Text',
    className = '',
  } = props;

  const containerClasses = [
    styles.container,
    styles[`variant--${variant}`],
    styles[`size--${size}`],
    styles[`radius--${borderRadius}`],
    className,
  ].join(' ');

  return (
    <div className={containerClasses}>
      {/* Header with label and close icon */}
      <div className={styles.header}>
        <div className={styles['label-wrapper']}>
          <Icon iconName="fi-sr-globe" className={styles['label-icon']} />
          <label htmlFor="url-input" className={styles['label-text']}>
            {label}
          </label>
        </div>
        {/* Close button */}
        {showCloseIcon && (
          <button aria-label="Cerrar" className={styles['close-button']} onClick={onCloseClick}>
            <Icon iconName="Close-URL" className={styles['close-icon-url']} />
          </button>
        )}
      </div>
      {/* Input field with protocol and URL */}
      <div className={styles['input-container']}>
        <div className={styles['input-wrapper']}>
          <Icon iconName="fi-sr-globe" className={styles['planet-icon']} />
          <span className={styles.protocol}>https://</span>
          <span className={styles.divider}>|</span>
          {/* Input field */}
          <div className={styles['input-group']}>
            <Icon iconName="fi-sr-globe" className={styles['input-icon']} />
            <input
              id="url-input"
              type="text"
              value={value}
              onChange={(e) => {
                onChange(e.target.value);
              }}
              placeholder={placeholder}
              disabled={variant === 'disabled'}
              className={styles.input}
            />
          </div>
          {/* Copy button with icon */}
          <button
            className={styles['copy-button']}
            onClick={onCopyClick}
            disabled={variant === 'disabled'}
          >
            <Icon iconName="fi-rr-copy" className={styles['copy-icon']} />
            <span>Copy</span>
          </button>
        </div>
      </div>
      {/* Footer with hint text and standalone info icon */}
      <div className={styles.footer}>
        {showHintText && (
          <div className={styles['hint-text']}>
            <Icon iconName="Info-Tooltip" className={styles['info-icon']} />
            <span className={styles['hint-text']}>{hintText}</span>
          </div>
        )}
        <Icon iconName="Info-Tooltip" className={styles['standalone-info-icon']} />
      </div>
    </div>
  );
}

export default URLInput;
