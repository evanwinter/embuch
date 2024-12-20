"use client";

import { Drawer } from "vaul";

export function SideDrawer({ children }: { children: React.ReactNode }) {
  return (
    <Drawer.Root direction="left">
      <Drawer.Trigger className="flex flex-shrink-0 absolute top-0 left-0 p-4 sm:p-8 lg:p-12">
        Menu
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
        <Drawer.Content
          className="left-2 top-2 bottom-2 fixed z-10 outline-none w-auto flex"
          // The gap between the edge of the screen and the drawer is 8px in this case.
          style={
            { "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties
          }
        >
          <div className="bg-zinc-50 h-full w-full grow p-5 flex flex-col rounded-[16px]">
            <div className="max-w-md mx-auto">{children}</div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
