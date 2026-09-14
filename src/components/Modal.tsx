"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";

type ModalProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
  heading?: (titleId: string) => ReactNode;
  panelClassName?: string;
};

export function Modal({ open, title, onClose, children, heading, panelClassName }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const isStudy = Boolean(heading);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const body = document.body;
    const scrollbarWidth = Math.max(0, window.innerWidth - html.clientWidth);
    const previous = {
      htmlOverflow: html.style.overflow,
      htmlOverscroll: html.style.overscrollBehavior,
      bodyOverflow: body.style.overflow,
      bodyOverscroll: body.style.overscrollBehavior,
      bodyPaddingRight: body.style.paddingRight,
    };

    html.style.overflow = "hidden";
    html.style.overscrollBehavior = "none";
    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const canScroll = (node: HTMLElement, deltaY: number) => {
      const overflowY = window.getComputedStyle(node).overflowY;
      const scrollable = overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay";
      if (!scrollable || node.scrollHeight <= node.clientHeight + 1) return false;
      if (deltaY < 0) return node.scrollTop > 0;
      if (deltaY > 0) return node.scrollTop + node.clientHeight < node.scrollHeight - 1;
      return true;
    };

    const allowsInnerScroll = (target: EventTarget | null, deltaY: number) => {
      const dialog = dialogRef.current;
      if (!dialog) return false;

      let node = target instanceof HTMLElement ? target : null;
      while (node) {
        if (canScroll(node, deltaY)) return true;
        if (node === dialog) break;
        node = node.parentElement;
      }
      return false;
    };

    const onWheel = (event: WheelEvent) => {
      if (!allowsInnerScroll(event.target, event.deltaY)) event.preventDefault();
    };

    let lastTouchY = 0;
    const onTouchStart = (event: TouchEvent) => {
      lastTouchY = event.touches[0]?.clientY ?? 0;
    };
    const onTouchMove = (event: TouchEvent) => {
      const y = event.touches[0]?.clientY ?? lastTouchY;
      const deltaY = lastTouchY - y;
      lastTouchY = y;
      if (!allowsInnerScroll(event.target, deltaY)) event.preventDefault();
    };

    document.addEventListener("wheel", onWheel, { passive: false });
    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      html.style.overflow = previous.htmlOverflow;
      html.style.overscrollBehavior = previous.htmlOverscroll;
      body.style.overflow = previous.bodyOverflow;
      body.style.overscrollBehavior = previous.bodyOverscroll;
      body.style.paddingRight = previous.bodyPaddingRight;
      document.removeEventListener("wheel", onWheel);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className={panelClassName ? `modal-backdrop modal-panel ${panelClassName}` : "modal-backdrop modal-panel"}
      aria-labelledby={titleId}
      onClose={onClose}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className={isStudy ? "study-modal-top" : "sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[var(--line)] bg-white px-5 py-4"}>
        {heading ? (
          heading(titleId)
        ) : (
          <h3 id={titleId} className="display pr-4 text-xl font-semibold text-ink">
            {title}
          </h3>
        )}
        <button
          type="button"
          className={isStudy ? "study-modal-close" : "btn btn-secondary !min-h-9 !px-3 text-sm"}
          onClick={onClose}
        >
          {isStudy ? (
            <>
              Close <span aria-hidden="true">×</span>
            </>
          ) : (
            "Close"
          )}
        </button>
      </div>
      <div className={isStudy ? "study-modal-body" : "px-5 py-5 text-sm leading-7 text-ink-soft"}>{children}</div>
    </dialog>
  );
}
