/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
    ,
    
    {
        id   : 'academy',
        title: 'academy',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/academy'
    },
    {
        id      : 'pages.pricing',
        title   : 'Pricing',
        type    : 'collapsable',
        icon    : 'heroicons_outline:banknotes',
        children: [
            {
                id   : 'pages.pricing.modern',
                title: 'Modern',
                type : 'basic',
                link : '/pages/pricing/modern',
            },
            {
                id   : 'pages.pricing.simple',
                title: 'Simple',
                type : 'basic',
                link : '/pages/pricing/simple',
            },
            {
                id   : 'pages.pricing.single',
                title: 'Single',
                type : 'basic',
                link : '/pages/pricing/single',
            },
            {
                id   : 'pages.pricing.table',
                title: 'Table',
                type : 'basic',
                link : '/pages/pricing/table',
            },
        ],
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
    ,
    
    {
        id   : 'academy',
        title: 'academy',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/academy'
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
    ,
    
    {
        id   : 'academy',
        title: 'academy',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/academy'
    }
        
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
    ,
    
    {
        id   : 'academy',
        title: 'academy',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/academy'
    },
       
    
];
