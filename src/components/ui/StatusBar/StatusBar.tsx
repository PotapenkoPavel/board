import React, { useMemo, useState } from "react"
import cx from "classnames"

import "./StatusBar.scss"

export interface StatusBarItem {
  id: number
  title: string
  color: string
}

type Props<T> = {
  items: T[]
  defaultSelected: number
  onClick?: (value: T) => void
}

const StatusBar = <T extends StatusBarItem = StatusBarItem>({
  items,
  defaultSelected,
  onClick
}: Props<T>) => {
  const [selected, setSelected] = useState<number>(defaultSelected)

  const selectedIdx = useMemo(
    () => items.findIndex((el) => el.id === selected),
    [selected]
  )

  const getSectionColor = (idx: number) => {
    if (idx <= selectedIdx) {
      return items[selectedIdx].color
    }

    return "initial"
  }

  const clickHandler = (id: number) => {
    setSelected(id)

    if (onClick) {
      const found = items.find((el) => el.id === id)

      if (!found) {
        return
      }

      onClick(found)
    }
  }

  return (
    <div
      className={cx("status-bar", {
        completed: selectedIdx === items.length - 1
      })}
    >
      {items.map((el, idx) => (
        <div
          key={el.id}
          className="status-bar__section"
          style={{ backgroundColor: getSectionColor(idx) }}
          onClick={() => clickHandler(el.id)}
          title={el.title}
        />
      ))}
    </div>
  )
}

export default StatusBar
