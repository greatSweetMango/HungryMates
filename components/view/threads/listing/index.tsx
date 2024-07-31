"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cards } from "@/constant/orders";
import axiosClient from "@/lib/axiosClient";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExpandableCardStandard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const [cardList, setCardList] = useState<any[]>([]);
  const [sent, setSent] = useState<any[]>([]);
  const [msg, setMsg] = useState("");

  const sendMsg = (message: string, idOrder: string, old: any[]) => {
    const newVal: any[] = [...old, { content: message, orderId: idOrder }]
    setSent(newVal)
    setMsg("") 
  }

  const formatOrderData = (array: any[]) => {
    let data: any[] = []
    for (let i = 0; i < array?.length; i++) {
      let users: any[] = []
          for (let j = 0; j < array[i].participants?.length; j++) {
              const tmp = {
                  id: array[i].participants[j].id,
                  name: `Name ${j}`,
                  designation: "Software Engineer",
                  image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
              }
              users = [...users, tmp]
          }
          const temp = {
              id: array[i].id,
              description: array[i].diningDescription,
              title: array[i].orderGroupName,
              src: "https://images.unsplash.com/photo-1651399436026-3ca4088b3d6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbmVzZSUyMGZvb2R8ZW58MHwwfDB8fHww",
              ctaText: array[i].status === "pending" ? "Join" : "Ended",
              ctaLink: "#",
              time: array[i].diningTime,
              people: users,
              location: array[i].diningLocation,
              information: array[i].diningDescription,
              status: array[i].status,
              creatorId: array[i].orderGroupCreaterId,
        chats: array[i].chats,
              content: ""    
          }
          data = [...data, temp]
      }
      return data
  }

  useEffect(() => {
    async function fetchOrders() {
      try {
        const orders = await axiosClient.get("/orders");
        setCardList(formatOrderData(orders.data))
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    }

    fetchOrders();
  }, []);


  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}-${active.id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}-${active.id}`}
              ref={ref}
              className="no-visible-scrollbar w-full max-w-[500px] h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-y-scroll"
            >
              {/* <motion.div layoutId={`image-${active.title}-${id}-${active.id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div> */}

              <div>
                <div className="grid gap-2 w-full items-start p-4">
                  <div className="w-full">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}-${active.id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}-${active.id}`}
                      className="font-normal text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <Separator className={`border w-full`} />
                  <div className={`grid gap-2`}>
                    {active.chats.map((itm, indexMsg) => (
                      <div>
                        <div key={`msg=${indexMsg}`} className={`p-2 rounded-md bg-slate-300 w-fit`}>
                          {itm?.content}
                        </div>
                        <p className="font-light text-xs">
                          From {itm?.userId}
                        </p>
                      </div>
                    ))}
                    {setInterval.length > 0 && sent.map((val, idxMsg) => (
                      val.orderId === active.id && (
                        <div className={`grid justify-end text-right`}>
                          <div key={`msg=${idxMsg}`} className={`p-2 rounded-md bg-slate-300 w-fit`}>
                            {val?.content}
                          </div>
                          <p className="font-light text-xs">
                            From you
                          </p>
                        </div>
                      )
                    ))}
                  </div>
                  <div className={`flex gap-4`}>
                    <Input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
                    <Button className={``} onClick={() => sendMsg(msg, active.id, sent)}>
                        Send <Send className={`w-6 h-6`} />
                    </Button>
                  </div>
{/* 
                  <motion.div
                    layoutId={`button-${active.title}-${id}-${active.id}`}
                    // href={active.ctaLink}
                    // target="_blank"
                    className="cursor-pointer px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.div> */}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    layoutId={`info-${active.title}-${id}-${active.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-normal text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10
										flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 
										[scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    // [mask:linear-gradient(to_bottom,white,white,transparent)]
                  >
                    {/* <OrderInfo
                      time={active.time}
                      people={active.people}
                      location={active.location}
                      description={active.information}
                    /> */}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto w-full gap-4">
        {cardList.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}-${card.id}`}
            key={`card-${card.title}-${id}-${card.id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}-${card.id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}-${card.id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}-${card.id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
