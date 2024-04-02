import React from "react";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import { AiOutlineMail } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import AppCard from "@crema/components/AppCard";
import { ClientType } from "@crema/types/models/invoice";

type Props = {
  client: ClientType;
};

const ClientItem = ({ client }: Props) => {
  const navigate = useNavigate();
  const [isLabelOpen, onOpenLabel] = React.useState(null);

  const onLabelOpen = (event: any) => {
    onOpenLabel(event.currentTarget);
  };

  const onLabelClose = () => {
    onOpenLabel(null);
  };

  return (
    <AppCard
      action={
        <Box>
          <IconButton
            style={{ height: 30, width: 30 }}
            aria-label="more"
            onClick={onLabelOpen}
            size="large"
          >
            <MoreVertIcon />
          </IconButton>
        </Box>
      }
    >
      {client?.logo ? (
        <Avatar
          src={client.logo}
          sx={{
            margin: "auto",
            width: 60,
            height: 60,
            img: {
              objectFit: "contain",
            },
          }}
          variant="square"
        />
      ) : (
        <Avatar sx={{ margin: "auto" }}>{client.name[0].toUpperCase()}</Avatar>
      )}

      <Typography variant="h3" sx={{ my: 4, textAlign: "center" }}>
        {client.name}
      </Typography>
      <Box sx={{ display: "flex", mb: 4 }}>
        <AiOutlineMail size={20} />
        <Box sx={{ ml: 2, color: "text.secondary" }}>{client.mail}</Box>
      </Box>
      <Box sx={{ display: "flex", mb: 4 }}>
        <GoLocation size={20} />
        <Box sx={{ ml: 2, color: "text.secondary" }}>
          {client.steetName} {client.steetName.length > 0 && " , "}
          {client.city} {client.city.length > 0 && " , "}
          {client.zipCode} {client.zipCode.length > 0 && " , "}
          {client.state} {client.state.length > 0 && " , "}
          {client.country}
        </Box>
      </Box>
      <Box sx={{ display: "flex", mb: 4 }}>
        {client.phone ? <FiPhone size={20} /> : <BsLink45Deg size={20} />}
        <Box sx={{ ml: 2, color: "text.secondary" }}>
          {client.phone ? (
            client.phone
          ) : (
            <Box
              component="a"
              href={client.link}
              sx={{ textDecoration: "none", color: "primary.main" }}
            >
              {client.link}
            </Box>
          )}
        </Box>
      </Box>
      <Menu
        anchorEl={isLabelOpen}
        keepMounted
        elevation={0}
        open={Boolean(isLabelOpen)}
        onClose={onLabelClose}
      >
        <MenuItem
          value={312}
          onClick={() => navigate(`/invoice/client/edit/${client.id}`)}
        >
          Edit Client
        </MenuItem>
      </Menu>
    </AppCard>
  );
};

export default ClientItem;
