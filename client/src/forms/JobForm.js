import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';

const JobForm = () => {

    return (
        <div>
            <form>
                <DatePicker 
                    required
                    // selected={appDate}
                    // onChange={handleChangeDate}
                    showTimeSelect
                    dateFormat="Pp"
                    className="Datepicker pa2"
                    minDate={new Date()}
                    placeholderText="Select a date"
                    calendarClassName="rasta-stripes"
                    popperModifiers={{
                        offset: {
                          enabled: true,
                          offset: "0px, 0px"
                        },
                        preventOverflow: {
                          enabled: true,
                          escapeWithReference: false,
                          boundariesElement: "scrollParent"
                        }
                      }}
                />
            </form>
        </div>
    )
}

export default JobForm;