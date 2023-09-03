"use client";
import {Card, Divider, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      <HeadBar></HeadBar>
      <Page1></Page1>
      <Projects></Projects>
    </main>
  )
}

function HeadBar() {
  return(
    <div className="flex h-16 w-full items-center justify-between sticky top-0 bg-background">
      <div className="flex cursor-pointer">
        <img className="h-10 ml-10 mr-5" src="/logo.svg"></img>
        <LogoText/>
      </div>
    </div>
  );
}

function LogoText() {
  const logo = ["D", "O", "C", "K"];
  return (
    <p className="text-2xl flex font-semibold">
      {
        logo.map(element => {
          return <span className="p-0.5">{element}</span>
        })
      }
    </p>);
}

function Page1() {
  return(<div className="m-8 explore-background h-[70vh]">
    <div className="w-3/6">
      <div className="pt-8 pb-8 text-5xl"><span style={{"color":"#586994"}}>LEARN</span> THROUGH PROJECTS</div>
      <div className="text-xl">Ready to ditch the textbooks and dive into the world of coding with your sleeves rolled up? Welcome to a journey where we learn by doing, one project at a time. Whether you're into software wizardry, full-stack finesse, or AI enchantment, get ready to unleash your inner developer. Let's code, create, and conquer!</div><br/>
    </div>
  </div>);
}

function Projects() {
  return (<div className="m-8">
    <div className="text-2xl mb-5 font-semibold" style={{"color":"#586994"}}> FULL STACK </div>
    <div className="flex gap-4">
      <Card className="w-[300px] cursor-pointer">
        <CardHeader>
          <div className="font-bold flex justify-center w-full">
            <span>Project 1 : Doggie Facts</span>
          </div>
        </CardHeader>
        <Divider></Divider>
        <CardBody>
          <Image alt="Doggie Facts"
          className="object-cover"
          src="/doggie-facts.jpeg"></Image>
        </CardBody>
      </Card>
      <Card className="w-[300px] cursor-pointer">
        <CardHeader>
          <div className="font-bold flex justify-center w-full">
            <span>Project 2 : Tic Tac Toe</span>
          </div>
        </CardHeader>
        <Divider></Divider>
        <CardBody>
          <Image alt="Tic Tac Toe"
          className="object-cover"
          src="/tic-tac-toe.png"></Image>
        </CardBody>
      </Card>
    </div>
  </div>);
}
