import { Box, Tooltip } from "@mui/material";
import type { TooltipProps } from "@mui/material/Tooltip/Tooltip";

export const getStringFromHtml = (htmlContent: string) => {
  return htmlContent.replace(/(<([^>]+)>)/gi, "");
};

export const generateUniqueID = () => {
  return `v1-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
};

export const ellipsisLines = (
  content: string,
  placement: TooltipProps["placement"] = "top",
) => {
  if (content) {
    return (
      <Tooltip placement={placement} title={content}>
        <Box
          style={{
            display: "block",
            width: "100%",
            maxWidth: 250,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {content}
          {content.length > 40 && "..."}
        </Box>
      </Tooltip>
    );
  } else {
    return handleNullValue(content);
  }
};

export const handleNullValue = (value: string | null) => {
  if (value === null) {
    return "-";
  } else {
    return value;
  }
};

export const formatCurrency = (
  value: number,
  currencyFormat: {
    language: string;
    currency: string;
  },
  decimalDigits: number,
) => {
  return new Intl.NumberFormat(currencyFormat?.language || "en-IN", {
    style: "currency",
    currency: currencyFormat?.currency || "INR",
    minimumFractionDigits: decimalDigits,
    maximumFractionDigits: decimalDigits,
  }).format(value);
};
