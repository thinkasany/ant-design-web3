// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/bitcoin-colorful.svg';

/**![BitcoinColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+Yml0Y29pbi1idGMtbG9nb19Db2xvcmZ1bDwvdGl0bGU+CiAgICA8ZyBpZD0iYml0Y29pbi1idGMtbG9nb19Db2xvcmZ1bCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImJpdGNvaW4tYnRjLWxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5NCwgMTIzKSIgZmlsbD0iI0Y3OTMxQSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTU4Ni40NjM4MTYsMzEyLjc2MzE3IEM1OTguNjk1OTU2LDIzMS4wMTM1MDggNTM2LjQyOTc5OCwxODcuMDY5OTg3IDQ1MS4yODU0NTMsMTU3Ljc1NTI4OSBMNDc4LjkwNjg5OSw0Ny4wMTgyMTY1IEw0MTEuNDY3OTE2LDMwLjIyMTQ5MjQgTDM4NC41Nzk0MzcsMTM4LjA0MzAwOSBDMzY2Ljg1MDA0NCwxMzMuNjIzMTM1IDM0OC42NDMwMjEsMTI5LjQ1ODQ4NCAzMzAuNTQ3MTQ0LDEyNS4zMjk4NjUgTDM1Ny42MzA4OCwxNi43OTY3MjQxIEwyOTAuMjMzOTUyLC01LjY4NzI2NTkzZS0xNCBMMjYyLjU5NzQ4NywxMTAuNzAxMDQxIEMyNDcuOTI2MTI5LDEwNy4zNjIxMTQgMjMzLjUxNjExNSwxMDQuMDYyMjIyIDIxOS41MzU2NjksMTAwLjU4NTE3NCBMMjE5LjYxMzc3MiwxMDAuMjM2ODY4IEwxMjYuNjE0MDYyLDc3LjAyMzUxOTMgTDEwOC42NzQzOTIsMTQ5LjAyMDYzMiBDMTA4LjY3NDM5MiwxNDkuMDIwNjMyIDE1OC43MDg0MDksMTYwLjQ4NDY4MiAxNTcuNjU0MDE4LDE2MS4xOTAzIEMxODQuOTYzMDUxLDE2OC4wMDMyNzMgMTg5LjkwMTU2OCwxODYuMDczMTEzIDE4OS4wODE0ODYsMjAwLjM5NTY2OCBMMTU3LjYxNzk3MSwzMjYuNTUxMjU3IEMxNTkuNDk4NDUyLDMyNy4wMjg2NzYgMTYxLjkzNzY3LDMyNy43MTkyODEgMTY0LjYyOTIyMiwzMjguODAwMjI4IEMxNjIuMzc5MjUzLDMyOC4yNDE3MzkgMTU5Ljk4NTA5NCwzMjcuNjMyMjA1IDE1Ny41MDA4MTYsMzI3LjAzNzY4MyBMMTEzLjM5OTYyNiw1MDMuNzYzNjAzIEMxMTAuMDYyMjIzLDUxMi4wNTY4NzIgMTAxLjU5MTA0NSw1MjQuNTAyNzgzIDgyLjQ5Nzg1MjYsNTE5Ljc3NjY0IEM4My4xNzM3NDQ1LDUyMC43NTU0OTggMzMuNDgyMTc4NCw1MDcuNTQ5OTIyIDMzLjQ4MjE3ODQsNTA3LjU0OTkyMiBMNS42ODQzNDE4OWUtMTQsNTg0LjcxMTU2MiBMODcuNzYwNzk2OSw2MDYuNTc5NzMyIEMxMDQuMDg3MzM5LDYxMC42NzIzMTkgMTIwLjA4NjQ0OSw2MTQuOTU0MDczIDEzNS44NDIyMzgsNjE4Ljk4MDYwMyBMMTA3LjkzNTQxNiw3MzAuOTg3Nzg5IEwxNzUuMjk2Mjk3LDc0Ny43ODQ1MTMgTDIwMi45MzI3NjIsNjM2Ljk2NjM2OSBDMjIxLjMzNTA0Myw2NDEuOTU5NzQ2IDIzOS4xOTM2MDYsNjQ2LjU2NTc4NCAyNTYuNjc2Njc1LDY1MC45MDc1OSBMMjI5LjEzMzMzMiw3NjEuMjAzMjc2IEwyOTYuNTc1MzE5LDc3OCBMMzI0LjQ3OTEzNyw2NjYuMjAyOTk4IEM0MzkuNDc2ODcyLDY4Ny45NTcwNjggNTI1Ljk0NTk2NSw2NzkuMTg2Mzc5IDU2Mi4zNDE5ODgsNTc1LjIxNzIzOSBDNTkxLjY2OTY4NSw0OTEuNTA5ODYxIDU2MC44ODIwNjIsNDQzLjIyNzUzNiA1MDAuMzgyMjM0LDQxMS43NDE5MzYgQzU0NC40NDczNzcsNDAxLjU4NDAzMSA1NzcuNjM4MTcxLDM3Mi42MTQ2MzYgNTg2LjQ4Nzg0NywzMTIuNzcyMTc4IEw1ODYuNDY2ODIsMzEyLjc1NzE2NSBMNTg2LjQ2MzgxNiwzMTIuNzYzMTcgWiBNNDMyLjIwMjQ0NCw1MjguMDc0NzU0IEM0MTEuMzM2MTg0LDYxMS42MzQ1NTMgMjcwLjE2ODYyOCw1NjYuNDY0NjY0IDIyNC40LDU1NS4xMzc3MjIgTDI2MS40NzY4Niw0MDcuMDA5MjU5IEMzMDcuMjQyNDgsNDE4LjM5NjE0OCA0NTQuMDEwMDYyLDQ0MC45MzAxMzggNDMyLjIwNTQ1Miw1MjguMDc0NzU0IEw0MzIuMjAyNDQ0LDUyOC4wNzQ3NTQgWiBNNDUyLjY0ODI1MywzMTEuNjcxNTMxIEM0MzMuNjU2NzU3LDM4Ny42MzkwOTcgMzE2LjQyODAwMywzNDkuMDQ0MTcgMjc4LjQsMzM5LjU4MDQyOSBMMzExLjkzODk0LDIwNS4zMDU1NTYgQzM0OS45NjY5NDMsMjE0Ljc2OTI5NiA0NzIuNDMxOTM3LDIzMi40MzI1NDkgNDUyLjY1NDI1NSwzMTEuNjcxNTMxIEw0NTIuNjQ4MjUzLDMxMS42NzE1MzEgWiIgaWQ9IuW9oueKtiI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==) */
export const BitcoinColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-bitcoin-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

BitcoinColorful.displayName = 'BitcoinColorful';
