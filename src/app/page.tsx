"use client";

import { BarChart2 } from "@/components/BarChart";
import { BarChartSecond } from "@/components/BarChartSecond";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  function showBar() {
    setShow(true);
    setShow2(false);
  }

  function showBar2() {
    setShow2(true);
    setShow(false);
  }

  return (
    <div>
      <h1 className="text-center mt-10 text-xl">
        How strong really is your incident respose plan for the next attack ?{" "}
      </h1>

      <div className=" mx-20">
        <h2 className="  mt-10 text-xl">What is your incident plan ?</h2>
        <Input />
      </div>

      <div className=" mx-20">
        <h2 className=" mt-10 text-xl">
          What attack are you expecting to have ?
        </h2>
        <Input />
      </div>

      <div className="flex justify-center mt-10 gap-2 ">
        <Button onClick={showBar} className="">
          Show Effectiveness
        </Button>
        <Button onClick={showBar2} className="">
          Show Recommendations
        </Button>
      </div>

      {show ? (
        <div className="mt-10 flex gap-10 mx-20 mb-10 justify-center">
          <BarChartSecond />
          <BarChart2 />
        </div>
      ) : (
        <div></div>
      )}

      {show2 ? (
        <>
          <div className="mt-10 flex gap-20 justify-center">
            <Card>
              <CardHeader>
                <CardTitle>
                  Internal Investigation Incident Response Plan
                </CardTitle>
                <CardDescription>
                  Effectiveness To Your Organization : Most Effective
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Legal and Compliance Actions</CardTitle>
                <CardDescription>
                  Effectiveness To Your Organization : Most Effective
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-10 flex gap-20 justify-center">
            <Card>
              <CardHeader>
                <CardTitle>Security Awareness Training</CardTitle>
                <CardDescription>
                  Effectiveness To Your Organization : Most Effective
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  Internal Investigation Incident Response Plan
                </CardTitle>
                <CardDescription>
                  Effectiveness To Your Organization : Most Effective
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}
