import subscriberModel from "@/lib/db/mongo/models/subscriber.model";
import { getSubscribers, createSubscriber, updateSubscriber, deleteSubscriber } from "@/lib/data.service";
import { NextResponse } from "next/server";

export async function GET() {

    console.log('\n------ Get Subscribers ------')
    console.log('SUBSCRIBER API ROUTE (GET) FOR AT FÅ ALLE SUBSCRIBERS')
    console.log('KALDER getSubscribers() I DATA SERVICE')
    const subscribers = await getSubscribers()
    
    console.log('AFLEVERERE getSubscribers() RESULTAT TILBAGE TIL KALDEREN')
    console.log('------\n')
    return NextResponse.json(subscribers)


};

export async function POST(request) {

    console.log('\n------ Create Subscriber ------')
    console.log('KALDER API MED VORES BODY DATA')
    const body = await request.json();
    
    console.log('KALDER createSubscriber() I DATA SERVICE')
    const newSubscriber = await createSubscriber(body);

    console.log('AFLEVERERE createSubscriber() RESULTAT TILBAGE TIL KALDEREN')
    console.log('------\n')
    return NextResponse.json(newSubscriber)


};

export async function PUT(request) {

    console.log('\n------ Update Subscriber ------')
    console.log('KALDER API MED VORES BODY DATA')
    const body = await request.json();
    
    console.log('KALDER updateSubscriber() I DATA SERVICE')
    const newSubscriber = await updateSubscriber(body);

    console.log('AFLEVERERE updateSubscriber() RESULTAT TILBAGE TIL KALDEREN')
    console.log('------\n')
    return NextResponse.json(newSubscriber)

}

export async function DELETE(request) {

    console.log('\n------ Delete Subscriber ------')
    console.log('KALDER API MED VORES BODY DATA')
    const body = await request.json();
    
    console.log('KALDER deleteSubscriber() I DATA SERVICE')
    const newSubscriber = await deleteSubscriber(body);

    console.log('AFLEVERERE deleteSubscriber() RESULTAT TILBAGE TIL KALDEREN')
    console.log('------\n')
    return NextResponse.json(newSubscriber)

}

