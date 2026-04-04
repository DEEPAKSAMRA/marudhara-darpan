// app/api/data/route.ts
// Client इस endpoint से data fetch करेगा
// Next.js का caching automatically handle करेगा

import { NextResponse } from 'next/server';
import { getAllSheetData } from '@/lib/sheets';

export async function GET() {
  try {
    const data = await getAllSheetData();
    return NextResponse.json(data, {
      headers: {
        // Browser को 5 मिनट cache करने दें, Next.js server 1 घंटा
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('Sheet fetch error:', error);
    return NextResponse.json({ error: 'Data fetch failed' }, { status: 500 });
  }
}
