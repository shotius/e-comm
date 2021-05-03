import Layout, { Content } from 'antd/lib/layout/layout'
import React from 'react'
import ProductsFilter from '../modules/components/ProductsFilter'
import SearchResult from '../modules/components/search'

export const SearchPage = () => (
    <Layout>
        <Content>
            <ProductsFilter />
            <SearchResult />
        </Content>
    </Layout>
)