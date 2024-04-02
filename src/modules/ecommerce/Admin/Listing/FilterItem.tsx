import React from "react";
import AppCard from "@crema/components/AppCard";

import FormControl from "@mui/material/FormControl";
import {
  Box,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import AppGridContainer from "@crema/components/AppGridContainer";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { FilterType } from "@crema/types/models/ecommerce/EcommerceApp";

const statusList = [
  {
    id: 1,
    name: "In Stock",
    value: true,
  },
  {
    id: 2,
    name: "Out of Stock",
    value: false,
  },
];

type Props = {
  filterData: FilterType;
  setFilterData: React.Dispatch<React.SetStateAction<FilterType>>;
};

const FilterItem = ({ filterData, setFilterData }: Props) => {
  const inputLabel = React.useRef(null);

  return (
    <AppCard title="Filter Item">
      <AppGridContainer spacing={5}>
        <Grid item xs={12}>
          <FormControl
            sx={{
              width: "100%",
            }}
            variant="outlined"
          >
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
              Status
            </InputLabel>
            <Select
              label="status"
              name="status"
              onChange={(e) => {
                setFilterData((prev) => ({
                  ...prev,
                  inStock: [e.target.value === 1],
                }));
              }}
            >
              {statusList.map((priority) => {
                return (
                  <MenuItem
                    value={priority.id}
                    key={priority.id}
                    sx={{
                      cursor: "pointer",
                      inputVariant: "outlined",
                    }}
                  >
                    {priority.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={(e) => {
              setFilterData((prev) => ({
                ...prev,
                mrp: { start: +e.target.value, end: filterData.mrp.end },
              }));
            }}
            sx={{
              width: "100%",
              backgroundColor: "background.paper",
              color: "text.primary",
            }}
            variant="outlined"
            placeholder="Start Price"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={(e) => {
              setFilterData((prev) => ({
                ...prev,
                mrp: { start: filterData.mrp.start, end: +e.target.value },
              }));
            }}
            sx={{
              width: "100%",
              backgroundColor: "background.paper",
              color: "text.primary",
            }}
            variant="outlined"
            placeholder="End Price"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePicker
            label="Creation Start Date"
            value={filterData.createdAt?.start}
            onChange={(value) =>
              setFilterData((prev) => ({
                ...prev,
                createdAt: {
                  start: dayjs(value).format("DD MMM YYYY"),
                  end: filterData.createdAt?.end,
                },
              }))
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePicker
            label="Creation End Date"
            value={filterData.createdAt?.end}
            onChange={(value) =>
              setFilterData((prev) => ({
                ...prev,
                createdAt: {
                  start: filterData.createdAt?.start,
                  end: dayjs(value).format("DD MMM YYYY"),
                },
              }))
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Switch
            value="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <Box component="span">Notifications</Box>
        </Grid>
      </AppGridContainer>
    </AppCard>
  );
};

export default FilterItem;
