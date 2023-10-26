

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
  import React,{useState} from "react"

const AddMovie = () => {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [reference, setReference] = useState("")
  const [genre, setGenre] = useState("")
  const [detailPic, setDetailPic] = useState("")
  const [seats, setSeats] = useState("")
  const [duration, setDuration] = useState("")

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
        <Input value={seats} onChange={(e) => setSeats(e.target.value)}  label="Available Seats" size="lg" />
        <Input value={price} onChange={(e) => setPrice(e.target.value)}  label="Price" size="lg" />
        <Input value={name} onChange={(e) => setName(e.target.value)}  label="Movie Name" size="lg" />
        <Input value={image} onChange={(e) => setImage(e.target.value)}  label="Image" size="lg" />
        <Input value={reference} onChange={(e) => setReference(e.target.value)}  label="Reference" size="lg" />
        <Input value={duration} onChange={(e) => setDuration(e.target.value)}  label="Duration" size="lg" />
        <Input value={detailPic} onChange={(e) => setDetailPic(e.target.value)}  label="DetailPic" size="lg" />
        <Input value={genre} onChange={(e) => setGenre(e.target.value)}  label="Genre" size="lg" />
        <Input value={date}  onChange={(e) => setDate(e.target.value)} label="Date" size="lg" />
       
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
