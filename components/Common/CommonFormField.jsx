import * as React from "react";
import {
  Checkbox,
  Col,
  Form,
  Input,
  Radio,
  Row,
  Select,
  InputNumber,
  TreeSelect,
  DatePicker,
  Upload,
} from "antd";

// import HColor from '../HColor';
// import HUploader from '../HUploader';
// import { useIntl } from 'umi';
// import HCIIPicker from '../HCIIPicker';
// import HIcon from '../HIcon';
// import HPEInput from './../HPEInput';
// import HOtp from '../HOtp';
// import HDocumentsUploader from '../HDocumentsUploader';

// import HPhoneNumber from '../Common/HPhoneNumber';
// import { isValidPhoneNumber } from '@/utility/validation';
// import Hdate from '../Hdate';
// import HCheckBoxList from '../HCheckBoxList';
// import DatePicker from '@/components/System/HDatePicker';
import { isEmpty } from "lodash";
// import HDatePicker from '../HDatePicker/index';

const CommonFormField = ({ items, layout = 1 }) => {
  // const { formatMessage } = useIntl()
  const renderElement = React.useCallback(
    (item, index) => {
      let element;

      const formItemProps = {
        label: ["CHECKBOX"].includes(item.type)
          ? undefined
          : !isEmpty(item.label)
          ? item?.label
          : "",
        className: item.className || undefined,
        style: {
          textAlign: item.center ? "center" : "inherit",
          ...item.style,
        },
        key: `form_item_${index}`,
        name: item.name,
        rules: item.rules || undefined,
        valuePropName: item.valuePropName ? "checked" : undefined,
        note: item?.note,
        style: {
          ...item?.style,
        },
        ...item.formextra,
      };
      const layoutProps = {
        key: `col_form_${index}`,
        sm: 24,
        md: item?.layout ? item.layout : 24 / layout,
        lg: item?.layout ? item.layout : 24 / layout,
        xs: 24,
        xl: item?.layout ? item.layout : 24 / layout,
        xxl: item?.layout ? item.layout : 24 / layout,
      };

      switch (item?.type?.toUpperCase()) {
        case "DOCUMENTS":
          element = <HDocumentsUploader />;
          break;
        case "TEXT":
          element = (
            <Input
              autoComplete="off"
              size="large"
              {...item.elementProps}
            ></Input>
          );
          break;
        case "NUMBER":
          element = (
            <InputNumber
              autoComplete="off"
              size="large"
              style={{ width: "100%" }}
              {...item.elementProps}
            ></InputNumber>
          );
          break;
        // case 'CHECKBOXLIST':
        //     element = <Checkbox options={item.options } />
        //     break;
        case "TEXTAREA":
          element = (
            <Input.TextArea
              rows={1}
              {...item.elementProps}
              size="large"
            ></Input.TextArea>
          );
          break;
        case "PASSWORD":
          element = <Input.Password size="large"></Input.Password>;
          break;
        case "CHECKBOX":
          element = (
            <>
              <Form.Item
                valuePropName={item?.valuePropName ?? "checked"}
                className={item.className}
                style={{ textAlign: item.center ? "center" : "inherit" }}
                hasFeedback
                key={`form_item_color_item${index}`}
                name={item.name}
                rules={item.rules}
              >
                <Checkbox {...item.elementProps}>{item?.label}</Checkbox>
                {/* <HCheckCard  title={useIntl().formatMessage({ id: item?.label ?? "" })} value={item.name} /> */}
              </Form.Item>
            </>
          );
          break;
        case "PHONE":
          element = (
            <Input.Group
              compact
              key={`form_item_input_group_${index}_${item.name}`}
            >
              <Form.Item
                key={`form_item_hnumber_${index}_${item.name}`}
                name="prefix"
                initialValue="+91"
                label={useIntl().formatMessage({
                  id: "profile.personal.prefix",
                })}
                style={{ textAlign: item.center ? "center" : "inherit" }}
                rules={[
                  { required: true, message: "please select number prefix" },
                ]}
              >
                <HPhoneNumber />
              </Form.Item>
              <Form.Item
                key={`form_item_inpnumber_${index}_${item.name}`}
                style={{ width: "79%" }}
                label={useIntl().formatMessage({ id: item.label })}
                shouldUpdate={(prevValues, currentValues) =>
                  prevValues.phone !== currentValues.phone ||
                  prevValues.prefix !== currentValues.prefix
                }
              >
                {({ getFieldValue }) => (
                  <>
                    <Form.Item
                      key={`form_item_number_${index}_${item.name}`}
                      className="w7 mb2"
                      name="phone"
                      rules={[
                        { required: true },
                        {
                          validator(rule, value) {
                            if (!getFieldValue("prefix")) {
                              return Promise.reject(
                                new Error("select a country prefix")
                              );
                            }
                            if (value && getFieldValue("prefix")) {
                              if (
                                !isValidPhoneNumber(
                                  value,
                                  getFieldValue("prefix")
                                )
                              ) {
                                return Promise.reject(
                                  new Error(
                                    "not valid phone number for this country"
                                  )
                                );
                              } else {
                                return Promise.resolve();
                              }
                            }
                            return Promise.resolve();
                          },
                        },
                      ]}
                    >
                      <Input
                        className="mobile_number"
                        size="large"
                        {...item.elementProps}
                      />
                    </Form.Item>
                  </>
                )}
              </Form.Item>
            </Input.Group>
          );
          break;
        case "HCII":
          element = <HCIIPicker />;
          break;
        case "HPEINPUT":
          element = <HPEInput />;
          break;
        case "COUNTRYCODE":
          element = <HPhoneNumber />;
          break;
        case "CUSTOMDATE":
          element = <Hdate />;
          break;
        case "DATE":
          element = (
            <DatePicker
              label={item.label}
              {...item.elementProps}
              size="large"
            />
          );
          break;
        case "COLOR":
          element = <HColor />;
          break;
        case "ICONPICKER":
          element = <HIcon />;
          break;
        case "UPLOADER":
          element = item.element ? item.element : <Upload />;
          break;
        case "RADIO":
          element = <Radio.Group options={item.options}></Radio.Group>;
          break;
        case "TREESELECT":
          element = (
            <TreeSelect
              {...item.elementProps}
              allowClear
              treeData={item.treeData ?? []}
              showSearch
              filterTreeNode={(input, option) => {
                return String(option?.label?.toLowerCase() ?? "").includes(
                  input?.toLowerCase()
                );
              }}
            />
          );
          break;
        case "SELECT":
          const props = {
            labelInValue: item.labelInValue ? true : false,
          };

          element = (
            <Select
              {...props}
              {...item.elementProps}
              allowClear
              showSearch
              filterOption={(input, option) => {
                return Object.keys(option || {}).some((key) => {
                  return String(option?.[key])
                    .toLowerCase()
                    .includes(input.toLowerCase());
                });
              }}
              mode={item.multiple ? "multiple" : undefined}
              size="large"
              defaultValue={item.default ? item.default : undefined}
              options={item.options}
            >
              {" "}
            </Select>
          );
          break;
        case "OTP":
          element = (
            <HOtp
              autoFocus
              length={4}
              className="otpContainer"
              inputClassName="otpInput"
            />
          );
          break;
        case "ELEMENT":
          element = React.isValidElement(item.element) ? (
            React.cloneElement(item.element)
          ) : (
            <>NO ELEMENT</>
          );
          break;
        default:
          element = <>NO Found</>;
          break;
      }

      return (
        <>
          {!isEmpty(item?.note) && <Col style={item?.style}>{item?.note}</Col>}
          <Col {...layoutProps}>
            <Form.Item {...formItemProps} labelAlign="top">
              {element}
            </Form.Item>
          </Col>
        </>
      );
    },
    [items]
  );

  return (
    <Row gutter={8}>
      {items &&
        items?.filter(Boolean).map((item, index) => {
          return renderElement(item, index);
        })}
    </Row>
  );
};

export default React.memo(CommonFormField);
