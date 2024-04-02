import Checkbox from "@mui/material/Checkbox/index";
import Box from "@mui/material/Box";
import { useIntl } from "react-intl";
import AppSearchBar from "@crema/components/AppSearchBar";
import AppsPagination from "@crema/components/AppsPagination";
import Hidden from "@mui/material/Hidden";
import { InvoiceType } from "@crema/types/models/invoice";

type InvContentHeaderPropsTypes = {
  page: number;
  invoiceList: InvoiceType[];
  checkedInvs: number[];
  setCheckedInvs: (checkedInvs: number[]) => void;
  filterText: string;
  onPageChange: (event: any, value: number) => void;
  onSetFilterText: (filterText: string) => void;
};

const InvContentHeader = (props: InvContentHeaderPropsTypes) => {
  const {
    page,
    invoiceList,
    checkedInvs,
    setCheckedInvs,
    filterText,
    onPageChange,
    onSetFilterText,
  } = props;

  const onHandleMasterCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.checked) {
      const InvIds = invoiceList?.map((Inv) => Inv.id);
      setCheckedInvs(InvIds);
    } else {
      setCheckedInvs([]);
    }
  };

  const { messages } = useIntl();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          alignItems: "center",
        }}
      >
        <span>
          <Checkbox
            sx={{
              color: "text.disabled",
            }}
            indeterminate={
              checkedInvs.length > 0 &&
              checkedInvs?.length < invoiceList?.length
            }
            checked={
              invoiceList?.length > 0 &&
              checkedInvs?.length === invoiceList?.length
            }
            onChange={onHandleMasterCheckbox}
          />
        </span>
        <Box sx={{ mr: 3 }}>
          <AppSearchBar
            iconPosition="right"
            overlap={false}
            value={filterText}
            onChange={(event: any) => onSetFilterText(event.target.value)}
            placeholder={messages["common.searchHere"] as string}
          />
        </Box>
      </Box>

      <Hidden smDown>
        {invoiceList?.length > 0 ? (
          <AppsPagination
            sx={{
              paddingRight: 2,
              paddingLeft: 2,
              "& .MuiToolbar-root": {
                paddingLeft: 0,
              },
              "& .MuiTablePagination-actions": {
                marginLeft: 0,
                "& .MuiButtonBase-root": {
                  padding: 2,
                },
              },
            }}
            count={invoiceList?.length}
            page={page}
            onPageChange={onPageChange}
          />
        ) : null}
      </Hidden>
    </>
  );
};

export default InvContentHeader;

InvContentHeader.defaultProps = {
  checkedInvs: [],
  filterText: "",
  page: 0,
};
