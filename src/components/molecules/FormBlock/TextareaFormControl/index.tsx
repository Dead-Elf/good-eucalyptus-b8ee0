import * as React from 'react';
import classNames from 'classnames';

export default function TextareaFormControl(props) {
    const { name, label, hideLabel, placeholder, isRequired, width = 'full', 'data-sb-field-path': fieldPath } = props;
    const labelId = `${name}-label`;
    const attr: any = {};
    if (label) {
        attr['aria-labelledby'] = labelId;
    }
    if (isRequired) {
        attr.required = true;
    }
    if (placeholder) {
        attr.placeholder = placeholder;
    }
    return (
        <div
            className={classNames('sb-form-control', {
                'sm:col-span-2': width === 'full'
            })}
            data-sb-field-path={fieldPath}
        >
            {label && (
                <label id={labelId} className={classNames('sb-label', { 'sr-only': hideLabel })} htmlFor={name} data-sb-field-path=".label .name#@for">
                    {label}
                </label>
            )}
            <textarea id={name} className="sb-textarea" name={name} rows="5" {...attr} data-sb-field-path=".name#@id .name#@name .placeholder#@placeholder" />
        </div>
    );
}
