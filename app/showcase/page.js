import { NextResponse, NextRequest } from 'next/server'

/* routes to home, user must explore home to specify a showcase route */
export default function redirectHome() {
  return (NextResponse.redirect('/'))
}
