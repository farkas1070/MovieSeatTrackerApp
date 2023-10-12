

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
const AddMovie = () => {
  return (
    <div className="h-full ">
      <div class="p-2  h-full items-center justify-center flex ">
        
      <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Add Movie
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" size="lg" />
        <Input label="Password" size="lg" />
        <Input label="Password" size="lg" />
        <Input label="Password" size="lg" />
        <Input label="Password" size="lg" />
        <Input label="Password" size="lg" />
        <Input label="Password" size="lg" />
        <Input label="Password" size="lg" />
        <Input label="Password" size="lg" />
       
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Add Movie
        </Button>
       
      </CardFooter>
    </Card>
      </div>
    </div>
  );
};
export default AddMovie;
