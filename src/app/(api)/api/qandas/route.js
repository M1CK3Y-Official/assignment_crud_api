import { createQanda, updateQanda, deleteQanda, getQandas } from "@/lib/data.service";
import { NextResponse } from "next/server";

export async function GET() {

    console.log('\n------ Get Qanda ------')
    console.log('QANDA API ROUTE (GET) FOR AT FÅ ALLE QANDA')
    console.log('KALDER getQandas() I DATA SERVICE')
    const qandas = await getQandas();

    console.log('AFLEVERERE getQandas() RESULTAT TILBAGE TIL KALDEREN')
    console.log('------\n')
    return NextResponse.json(qandas)

}

export async function POST(request) {

    console.log('\n------ Create Qanda ------')
    console.log('KALDER API MED VORES BODY DATA')
    const body = await request.json();
    
    console.log('KALDER createQanda() I DATA SERVICE')
    const newQanda = await createQanda(body);

    console.log('AFLEVERERE createQanda() RESULTAT TILBAGE TIL KALDEREN')
    console.log('------\n')
    return NextResponse.json(newQanda)

}

export async function PUT(request) {

    console.log('\n------ Update Qanda ------')
    console.log('KALDER API MED VORES BODY DATA')
    const body = await request.json();
    
    console.log('KALDER updateQanda() I DATA SERVICE')
    const newQanda = await updateQanda(body);

    console.log('AFLEVERERE updateQanda() RESULTAT TILBAGE TIL KALDEREN')
    console.log('------\n')
    return NextResponse.json(newQanda)

}

export async function DELETE(request) {

    console.log('\n------ Delete Qanda ------')
    console.log('KALDER API MED VORES BODY DATA')
    const body = await request.json();
    
    console.log('KALDER deleteQanda() I DATA SERVICE')
    const newQanda = await deleteQanda(body);

    console.log('AFLEVERERE deleteQanda() RESULTAT TILBAGE TIL KALDEREN')
    console.log('------\n')
    return NextResponse.json(newQanda)

}