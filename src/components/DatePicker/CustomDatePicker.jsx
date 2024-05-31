import { Form, Select } from 'antd'
import { months, years } from '../../utils/monthyear'
const CustomDatePicker = ({ mode, required, name, value }) => {
    return (
        <Form.Item label={mode} required={required} name={name}
            rules={[
                {
                    required,
                    message: `Please input a ${mode}!`,
                },
            ]}
        >
            <Select placeholder={`Select a ${mode}`} size='large' defaultValue={value}>
                {(mode === 'Month') &&
                    months.map(month => (
                        <Select.Option value={month.value}>{month.label}</Select.Option>
                    ))
                }
                {(mode === 'Year') &&
                    years.map(year => (
                        <Select.Option value={year.value}>{year.label}</Select.Option>
                    ))
                }
            </Select>
        </Form.Item>
    )
}

export default CustomDatePicker;