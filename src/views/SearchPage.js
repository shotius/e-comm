import Layout, { Content } from 'antd/lib/layout/layout'
import React from 'react'
import ProductsFilter from '../modules/components/ProductsFilter'
import SearchResult from '../modules/components/Search'

export const SearchPage = () => (
    <Layout className="container">
        <Content>
            <ProductsFilter />
            <SearchResult />
        </Content>
    </Layout>
)