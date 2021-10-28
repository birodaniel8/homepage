import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { purple } from "@mui/material/colors";

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  fontSize: 10,
  width: "100%",
  height: 20,
  borderRadius: 0,
  backgroundColor: purple[600],
  "&:hover": {
    backgroundColor: purple[700],
    fontSize: 15,
  },
}));

export const LoginTabs = styled(Tabs)({
  minHeight: 30,
  height: 30,
});

export const LoginTab = styled(Tab)({
  minHeight: 30,
  height: 30,
  width: "50%"
});
