
import React from 'react';
import { Checkbox, Typography } from "antd";
import BABox from "./BABox";

export default function BACheckbox(props) {
    const { label, checked, onChange, disabled, isMultiple, value, name, required } = props;
    const { Title } = Typography;

    return (
        <BABox className="flex items-center gap-2">
            <Checkbox
                checked={checked}
                onChange={(e) => onChange && onChange(e.target.checked)}
                disabled={disabled}
                indeterminate={isMultiple} // Mapping isMultiple to generic indeterminate for now if intended
                value={value}
                name={name}
            >
                {label && (
                    <span className="text-base">
                        {label}
                        {required && <span className="text-red-500 ml-1">*</span>}
                    </span>
                )}
            </Checkbox>
        </BABox>
    );
}
