import React, { memo, useState, useCallback, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createFilter, filterKeyValue } from './utils'; // Local utils
import Icon from '../../general/Icon';
import Avatar from '../../general/Avatar';
import InputWrapper from '../components/InputWrapper';
import { default as RSelect } from 'react-select';
import AsyncSelect from 'react-select/async';
import Checkbox from '../../general/Checkbox';

import DropdownIndicator from './components/DropdownIndicator';
import ClearIndicator from './components/ClearIndicator';
import SearchIndicator from './components/SearchIndicator';
import SingleValue from './components/SingleValue';
import MultiValueLabel from './components/MultiValueLabel';
import LoadingIndicator from './components/LoadingIndicator';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
import defaultTheme from '../../../utils/styles/defaultTheme';

const useStyles = createUseStyles(styles, 'Select');
const newStyles = styles(defaultTheme);

const Select = memo(
    ({
        error,
        classes: classesProp,
        overrides: overridesProp,
        className: classNameProp,
        type = 'checkboxAndBullet',
        isReadOnly,
        isFullWidth,
        isFuzzy,
        isMulti,
        isClearable,
        placeholder,
        options,
        defaultValue,
        value,
        isValueObject,
        onChange,
        onBlur,
        hideSelectedOptions,
        filterByKey,
        defaultMenuIsOpen = false,
        loadOptions,
        loadingMessage,
        loadingPlaceholder,
        noOptionsMessage,
        ...props
    }) => {
        const [focused, setFocused] = useState(false);
        const newDefaultValue = defaultValue || value;
        const [innerOptions, setInnerOptions] = useState(options);
        const [lazyOptions, setLazyOptions] = useState({
            areLoaded: false,
            options: null,
            isLoading: false,
        });
        const debounce = useRef(null);
        const classes = useClasses(useStyles, classesProp);
        const override = getOverrides(overridesProp, Select.overrides);

        const rootClassName = classnames(
            classes.root,
            {
                [classes.isFullWidth]: isFullWidth,
                [classes.focused]: focused,
                [classes.async]: loadOptions && isFuzzy,
            },
            classNameProp,
        );

        const selectClassName = classnames(classes.select, {
            [classes.isMulti]: isMulti,
        });

        const loadOptionsCb = useCallback(
            (text, cb) => {
                if (debounce.current) clearTimeout(debounce.current);
                debounce.current = setTimeout(() => {
                    if (!loadOptions) return cb();
                    const loader = loadOptions(text, cb);
                    if (loader && typeof loader.then === 'function') {
                        loader.then(
                            (results) => {
                                setInnerOptions(results);
                                cb(results);
                            },
                            () => cb(),
                        );
                    }
                }, 500);
            },
            [loadOptions],
        );

        const handleOnChange = useCallback(
            (data, action) => {
                onChange && onChange(data);
            },
            [onChange],
        );

        const handleOnFocus = useCallback(() => {
            setFocused(true);
            if (loadOptions && !isFuzzy && !lazyOptions.areLoaded) {
                setLazyOptions({
                    ...lazyOptions,
                    isLoading: true,
                });
                loadOptions().then((options) => {
                    setLazyOptions({
                        areLoaded: true,
                        isLoading: false,
                        options,
                    });
                });
            }
        }, [isFuzzy, lazyOptions, loadOptions]);

        const handleOnBlur = useCallback(() => {
            setFocused(false);
            onBlur && onBlur();
        }, [onBlur]);

        const controlStyles = useCallback(
            ({ data, isDisabled, isFocused, isSelected }) => {
                let styles = {
                    ...newStyles.control,
                    ...(override.control?.style || {}),
                };

                if (isFocused) {
                    styles = {
                        ...styles,
                        ...newStyles.controlFocused,
                        ...(override.controlFocused?.style || {}),
                    };
                }
                return styles;
            },
            [override],
        );

        const optionsStyles = useCallback(
            ({ data, isDisabled, isFocused, isSelected }) => {
                let styles = {
                    ...newStyles.options,
                    ...(override.options?.style || {}),
                };

                if (isDisabled) {
                    styles = {
                        ...styles,
                        ...newStyles.optionDisabled,
                        ...(override.optionDisabled?.style || {}),
                    };
                }

                return styles;
            },
            [override],
        );

        const valueContainerStyles = useCallback(
            ({ data, isDisabled, isFocused, isSelected }) => {
                let styles = {
                    ...newStyles.valueContainer,
                    ...(override.valueContainer?.style || {}),
                };

                if (isDisabled) {
                    styles = {
                        ...newStyles.valueContainerDisabled,
                        ...(override.valueContainerDisabled?.style || {}),
                    };
                }
                return styles;
            },
            [override],
        );

        const placeholderStyles = useCallback(
            ({ data, isDisabled, isFocused, isSelected }) => {
                let styles = {
                    ...newStyles.placeholder,
                    ...(override.placeholder?.style || {}),
                };

                if (isDisabled) {
                    styles = {
                        ...newStyles.placeholderDisabled,
                        ...(override.placeholderDisabled?.style || {}),
                    };
                }
                return styles;
            },
            [override],
        );

        const multiValueLabelStyles = useCallback(
            ({ data, isDisabled, isFocused, isSelected }) => {
                let styles = {
                    ...newStyles.multiValueLabel,
                    ...(override.multiValueLabel?.style || {}),
                };
                if (isDisabled) {
                    styles = {
                        ...styles,
                        ...newStyles.multiValueLabelDisabled,
                        ...(override.multiValueLabelDisabled?.style || {}),
                    };
                }

                return styles;
            },
            [override],
        );

        const multiValueRemoveStyles = useCallback(
            ({ data, isDisabled, isFocused, isSelected }) => {
                let styles = {
                    ...newStyles.multiValueRemove,
                    ...(override.multiValueRemove?.style || {}),
                };
                if (isDisabled) {
                    styles = {
                        ...styles,
                        ...newStyles.multiValueRemoveDisabled,
                        ...(override.multiValueRemoveDisabled?.style || {}),
                    };
                }

                return styles;
            },
            [override],
        );

        const single = useCallback(
            (option, data) => {
                let textClasses = [classes.optionLabelText];
                let subtitleClasses = [classes.optionLabelSubtitle];
                let iconClasses = [classes.optionLabelIcon];
                let customIconClasses = [classes.optionLabelCustomIcon];

                if (option.isDisabled) {
                    textClasses.push(classes.disabledText);
                    subtitleClasses.push(classes.disabledText);
                    iconClasses.push(classes.disabledIcon);
                    customIconClasses.push(classes.disabledIcon);
                }
                return (
                    <div className={classes.optionLabel} {...override.optionLabel}>
                        {option.iconType && (
                            <Icon
                                className={iconClasses.join(' ')}
                                name={option.iconType}
                                color={option.iconColor || null}
                                size="medium"
                                {...override.optionLabelIcon}
                            />
                        )}
                        {option.icon && (
                            <div
                                className={customIconClasses.join(' ')}
                                {...override.optionLabelCustomIcon}
                            >
                                {option.icon}
                            </div>
                        )}
                        {option.src && (
                            <div
                                className={classes.optionLabelAvatar}
                                {...override.optionLabelAvatar}
                            >
                                {option.isDisabled && (
                                    <div
                                        className={classes.disabledAvatar}
                                        {...override.disabledAvatar}
                                    />
                                )}
                                <Avatar
                                    size="small"
                                    src={option.src}
                                    placeholder={option.placeholder || ''}
                                    alt={option.alt}
                                />
                            </div>
                        )}

                        {!option.description && (
                            <div className={textClasses.join(' ')} {...override.label}>
                                {option.label}
                            </div>
                        )}
                        {option.description && (
                            <div
                                className={classes.optionLabelBlock}
                                {...override.optionLabelBlock}
                            >
                                <div
                                    className={textClasses.join(' ')}
                                    {...override.optionLabelText}
                                >
                                    {option.label}
                                </div>
                                <div
                                    className={subtitleClasses.join(' ')}
                                    {...override.optionLabelSubtitle}
                                >
                                    {option.description}
                                </div>
                            </div>
                        )}
                    </div>
                );
            },
            [classes, override],
        );

        const multi = useCallback(
            (option, data) => {
                const isSelected = value
                    ? !!value.find((item) => item.value === option.value)
                    : false;
                let bulletClasses = [classes.optionLabelBullet];
                let textClasses = [classes.optionLabelText];

                if (option.isDisabled) {
                    bulletClasses.push(classes.optionLabelBulletDisabled);
                } else if (option.type) {
                    if (option.type === 'primary')
                        bulletClasses.push(classes.optionLabelBulletPrimary);
                    if (option.type === 'danger')
                        bulletClasses.push(classes.optionLabelBulletDanger);
                    if (option.type === 'success')
                        bulletClasses.push(classes.optionLabelBulletSuccess);
                }

                if (option.isDisabled) {
                    textClasses.push(classes.disabledText);
                }

                return (
                    <div className={classes.optionLabel} {...override.optionLabel}>
                        <Checkbox
                            className={classes.optionLabelCheckbox}
                            checked={isSelected}
                            color="orange"
                            isDisabled={option.isDisabled || false}
                            isBiTone={true}
                            {...override.optionLabelCheckbox}
                        />
                        {option.type && (
                            <div
                                className={bulletClasses.join(' ')}
                                {...override.optionLabelBullet}
                            />
                        )}
                        <div className={textClasses.join(' ')} {...override.optionLabelText}>
                            {option.label}
                        </div>
                    </div>
                );
            },
            [classes, value, override],
        );

        const formatOptionLabel = useCallback(
            (option, data) => {
                if (isMulti) return multi(option, data);
                else return single(option, data);
            },
            [isMulti, multi, single],
        );

        const formatGroupLabel = useCallback(
            (data) => (
                <div key={data.value} className={classes.group}>
                    {data.label}
                </div>
            ),
            [classes],
        );

        const indicatorSeparator = useMemo(() => {
            return newStyles.indicatorSeparator;
        }, []);

        const selectProps = useMemo(() => {
            return {
                className: selectClassName,
                classNamePrefix: 'hoi-poi-select',
                placeholder,
                options: lazyOptions.options || innerOptions,
                noOptionsMessage,
                loadingMessage,
                defaultValue: newDefaultValue,
                defaultMenuIsOpen,
                isMulti,
                isDisabled: isReadOnly,
                isClearable: isMulti ? true : isClearable,
                isLoading: lazyOptions.isLoading,
                autoFocus: focused,
                hideSelectedOptions: isMulti ? false : hideSelectedOptions,
                closeMenuOnSelect: isMulti ? false : true,
                menuPlacement: 'auto',
                menuPortalTarget: document.body,
                loadOptions,
                openMenuOnClick: !(loadOptions && isFuzzy),
                onChange: handleOnChange,
                onFocus: handleOnFocus,
                onBlur: handleOnBlur,
                filterOption: filterByKey ? filterKeyValue : createFilter,
                formatOptionLabel,
                formatGroupLabel,
                components: {
                    DropdownIndicator: loadOptions && isFuzzy ? SearchIndicator : DropdownIndicator,
                    ClearIndicator,
                    SingleValue,
                    MultiValueLabel,
                    LoadingIndicator,
                },
                styles: {
                    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    control: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...controlStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    placeholder: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...placeholderStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    valueContainer: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...valueContainerStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...optionsStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    indicatorsContainer: (styles) => ({
                        ...styles,
                        ...newStyles.indicatorsContainer,
                        ...(override.indicatorsContainer?.style || {}),
                    }),
                    clearIndicator: (styles) => ({
                        ...styles,
                        ...newStyles.clearIndicator,
                        ...(override.clearIndicator?.style || {}),
                    }),
                    indicatorSeparator: (styles) => ({
                        ...styles,
                        ...indicatorSeparator,
                        ...(override.indicatorSeparator?.style || {}),
                    }),
                    dropdownIndicator: (styles) => ({
                        ...styles,
                        ...newStyles.dropdownIndicator,
                        ...(override.dropdownIndicator?.style || {}),
                    }),
                    multiValue: (styles) => ({
                        ...styles,
                        ...newStyles.multiValue,
                        ...(override.multiValue?.style || {}),
                    }),
                    multiValueLabel: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...multiValueLabelStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    multiValueRemove: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...multiValueRemoveStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    noOptionsMessage: (styles) => ({
                        ...styles,
                        ...newStyles.noOptionsMessage,
                        ...(override.noOptionsMessage?.style || {}),
                    }),
                    loadingMessage: (styles) => ({
                        ...styles,
                        ...newStyles.loadingMessage,
                        ...(override.loadingMessage?.style || {}),
                    }),
                },
                ...override['react-select'],
            };
        }, [
            isMulti,
            isClearable,
            isReadOnly,
            isFuzzy,
            loadOptions,
            loadingMessage,
            noOptionsMessage,
            filterByKey,
            placeholder,
            defaultMenuIsOpen,
            hideSelectedOptions,
            innerOptions,
            lazyOptions,
            newDefaultValue,
            selectClassName,
            focused,
            indicatorSeparator,
            override,
            handleOnChange,
            handleOnFocus,
            handleOnBlur,
            formatOptionLabel,
            formatGroupLabel,
            controlStyles,
            optionsStyles,
            valueContainerStyles,
            placeholderStyles,
            multiValueLabelStyles,
            multiValueRemoveStyles,
        ]);

        let SelectComponent = RSelect;
        if (loadOptions && isFuzzy) {
            SelectComponent = AsyncSelect;
            selectProps.loadOptions = loadOptionsCb;
        }

        return (
            <InputWrapper
                {...props}
                error={error}
                className={rootClassName}
                overrides={overridesProp}
                isFullWidth={isFullWidth}
            >
                <div className={classes.inputComponents} {...override.inputComponents}>
                    <SelectComponent {...selectProps} />
                </div>
            </InputWrapper>
        );
    },
);

Select.overrides = ['root', 'react-select'];

Select.defaultProps = {
    labelMode: 'vertical',
    onChange: () => {},
    value: '',
    isReadOnly: false,
    hideSelectedOptions: true,
    isClearable: true,
    overrides: {},
    isValueObject: true,
    hideOptions: false,
    filterByKey: false,
};

Select.propTypes = {
    className: PropTypes.string,
    menuListClassName: PropTypes.string,
    menuClassName: PropTypes.string,
    overrides: PropTypes.object,
    /** Async mode */
    loadOptions: PropTypes.func,
    /* Autocomplete/Search UI */
    isFuzzy: PropTypes.bool,
    onChange: PropTypes.func,
    /** Native input id */
    id: PropTypes.string,
    /** Native input name */
    name: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.any,
            isDisabled: PropTypes.bool,
            src: PropTypes.string,
            icon: PropTypes.element,
            iconType: PropTypes.string,
            description: PropTypes.string,
        }),
    ),
    value: PropTypes.any,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    placeholder: PropTypes.string,
    noOptionsPlaceholder: PropTypes.string,
    loadingPlaceholder: PropTypes.string,
    isFullWidth: PropTypes.bool,
    /** Info popover */
    hint: PropTypes.string,
    /** Error will be displayed below the component with style changes */
    error: PropTypes.string,
    isRequired: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    /** Hide the selected option from the menu */
    hideSelectedOptions: PropTypes.bool,
    /** Is the select value clearable */
    isClearable: PropTypes.bool,
    /** React select component customization */
    components: PropTypes.object,
    /** multiple select support */
    isMulti: PropTypes.bool,
    /** Use value as a object { label, value } or as the value */
    isValueObject: PropTypes.bool,
    /** Fixed actions added at the bottom con menu list */
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            onClick: PropTypes.func,
        }),
    ),
    /** Filter by keys as well */
    filterByKey: PropTypes.bool,
};

export default Select;
