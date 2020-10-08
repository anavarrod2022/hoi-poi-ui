export default (theme) => {
    return {
        root: {
            outline: 'none',
        },
        inputWrapper: {},
        fieldBottom: {},
        Label: {
            width: 150,
            marginRight: 17,
            padding: '0 0 8px 0',
        },
        vertical: {
            '& $inputWrapper': {
                display: 'block',
                padding: '15px 0 10px 0',
                marginLeft: '0 !important',
                '& $Label': {
                    width: '100%',
                },
            },
        },
        horizontal: {
            '& $fieldBottom': {
                marginLeft: 167,
            },
            '& $inputWrapper': {
                display: 'flex',
                alignItems: 'center',
                padding: '15px 0 10px 0',
                '& $error': {},
                '& $Label': {
                    padding: 0,
                },
            },
        },
        formControl: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            width: 300,
            minWidth: 150,
            boxSizing: 'border-box',
        },
        isFullWidth: {
            '&$vertical $Label': {
                width: '100%',
            },
        },
        error: {},
    };
};
