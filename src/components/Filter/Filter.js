import React from "react";
import { Field } from "formik";
import "./Filter.css";
import { Typography } from "@material-ui/core";
function Filter(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="filter">
      <Typography variant="h5" align="center">
        {label}
      </Typography>
      <div className="filter__dietCheckbox">
        <Field name={name} {...rest}>
          {({ field }) => {
            //   console.log(field);
            return options.map((option) => {
              return (
                <p key={option.key}>
                  <label htmlFor={option.value}>
                    <input
                      id={option.value}
                      type="checkbox"
                      {...field}
                      value={option.value}
                      checked={field.value.includes(option.value)}
                    />
                    <span>{option.key}</span>
                  </label>
                </p>
              );
            });
          }}
        </Field>
      </div>
    </div>
  );
}

export default Filter;
