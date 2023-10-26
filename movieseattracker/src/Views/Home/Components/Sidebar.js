import React, { useContext } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
} from "@material-tailwind/react";
import { UserTypeContext } from "../../../Context/GlobalContext";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Logo from "../../../Assets/Register/Logo.png";
const SidebarWithSearch = ({ onSelect }) => {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [userType, setUserType] = useContext(UserTypeContext);
  const navigate = useNavigate();
  const handleOpen = (value) => {

    setOpen(open === value ? 0 : value);
  };
  return (
    <Card
      style={{ borderRadius: 0 }}
      className="h-screen w-64 max-w-[20rem] p-4 shadow-xl shadow-white-900/5 bg-[#1e1f20]"
    >
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src={Logo} alt="brand" className="h-14 w-14" />
        <Typography variant="h5" color="white">
          SeatWave
        </Typography>
      </div>
      <div className="p-2">
        <Input
          icon={<MagnifyingGlassIcon className="h-5 w-5 text-white" />}
          label="Search"
          className="text-white" // Set the text color for the input field itself
        />
      </div>
      <List>
        <Accordion
          open={open === 2}
          className="text-white"
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`text-white mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0 text-white" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <svg
                  class="mr-3  flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
              </ListItemPrefix>
              <Typography color="white" className="mr-auto font-normal">
                Profile Options
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem
                className="text-white"
                onClick={() => {
                  navigate('/Home')
                }}
              >
                <ListItemPrefix>
                  <ChevronRightIcon
                    strokeWidth={3}
                    className="h-3 w-5 text-white"
                  />
                </ListItemPrefix>
                Log Out
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-white-50" />
        <ListItem
          className="text-white"
          onClick={() => {
            onSelect("Home");
          }}
        >
          <ListItemPrefix>
            <svg
              class="w-5 h-5 mr-3 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M 362.667 383.841 v 128 H 448 c 35.346 0 64 -28.654 64 -64 V 253.26 c 0.005 -11.083 -4.302 -21.733 -12.011 -29.696 l -181.29 -195.99 c -31.988 -34.61 -85.976 -36.735 -120.586 -4.747 c -1.644 1.52 -3.228 3.103 -4.747 4.747 L 12.395 223.5 C 4.453 231.496 -0.003 242.31 0 253.58 v 194.261 c 0 35.346 28.654 64 64 64 h 85.333 v -128 c 0.399 -58.172 47.366 -105.676 104.073 -107.044 C 312.01 275.383 362.22 323.696 362.667 383.841 Z" />
              <path d="M256,319.841c-35.346,0-64,28.654-64,64v128h128v-128C320,348.495,291.346,319.841,256,319.841z" />
            </svg>
          </ListItemPrefix>
          Home
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="white"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem
          className="text-white"
          onClick={() => {
            onSelect("HomeMovies");
          }}
        >
          <ListItemPrefix>
            <svg
              class="mr-3  flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m16.914,1h2.086c.621,0,1.215.114,1.764.322l-5.678,5.678h-4.172l6-6Zm7.086,6v-1c0-1.4-.579-2.668-1.51-3.576l-4.576,4.576h6.086ZM10.522,1l-6.084,6h3.648L14.086,1h-3.564ZM1.59,7L7.674,1h-2.674C2.243,1,0,3.243,0,6v1h1.59Zm22.41,2v9c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5v-9h24Zm-8.953,6.2l-4.634-2.48c-.622-.373-1.413.075-1.413.8v4.961c0,.725.791,1.173,1.413.8l4.634-2.48c.604-.362.604-1.238,0-1.6Z" />
            </svg>
          </ListItemPrefix>
          Movies
        </ListItem>
        <ListItem
          className="text-white"
          onClick={() => {
            onSelect("HomeCinemas");
          }}
        >
          <ListItemPrefix>
            <svg
              class="mr-3  flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21,5h-2V3c0-1.654-1.346-3-3-3H8c-1.654,0-3,1.346-3,3v6H3c-1.654,0-3,1.346-3,3v12H24V8c0-1.654-1.346-3-3-3ZM6,19h-2v-2h2v2Zm0-4h-2v-2h2v2Zm5,4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm4,12h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm5,12h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Z" />
            </svg>
          </ListItemPrefix>
          Cinemas
        </ListItem>
        {userType === "Admin" && (
          <ListItem
            className="text-white"
            onClick={() => {
              onSelect("AddMovie");
            }}
          >
            <ListItemPrefix>
              <svg
                class="mr-3  flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="m18,22c0,.553-.448,1-1,1H5c-2.761,0-5-2.239-5-5v-7.764c0-1.136.486-2.223,1.333-2.981.293-.263.715-.329,1.075-.168.36.161.592.519.592.913v6.5c0,3.59,2.91,6.5,6.5,6.5h7.5c.552,0,1,.447,1,1Zm6-16.5v9c0,2.481-2.019,4.5-4.5,4.5h-10c-2.481,0-4.5-2.019-4.5-4.5V5.5c0-2.481,2.019-4.5,4.5-4.5h10c2.481,0,4.5,2.019,4.5,4.5Zm-2,7.5v-2h-2v2h2Zm-2-4h2v-2h-2v2Zm0-5.95v1.95h1.95c-.199-.978-.972-1.75-1.95-1.95Zm-13,3.95v2h2v-2h-2Zm0,6h2v-2h-2v2Zm.05-8h1.95v-1.95c-.978.199-1.75.971-1.95,1.95Zm1.95,11.95v-1.95h-1.95c.199.978.972,1.75,1.95,1.95Zm12.95-1.95h-1.95v1.95c.978-.199,1.75-.971,1.95-1.95Z" />
              </svg>
            </ListItemPrefix>
            Add New Movie
           
          </ListItem>
        )}
      </List>
      <Alert
        open={openAlert}
        className="mt-auto"
        onClose={() => setOpenAlert(false)}
      >
        <CubeTransparentIcon className="mb-4 h-12 w-12" />
        <Typography variant="h6" className="mb-1">
          Upgrade to PRO
        </Typography>
        <Typography variant="small" className="font-normal opacity-80">
          Upgrade to Material Tailwind PRO and get even more components,
          plugins, advanced features and premium.
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Dismiss
          </Typography>
          <Typography as="a" href="#" variant="small" className="font-medium">
            Upgrade Now
          </Typography>
        </div>
      </Alert>
    </Card>
  );
};
export default SidebarWithSearch;
