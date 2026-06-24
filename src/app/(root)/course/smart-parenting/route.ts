import { permanentRedirect } from 'next/navigation';

export async function GET() {
    return permanentRedirect('/courses/smart-parenting');
}
